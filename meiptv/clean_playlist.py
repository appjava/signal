import sys
import os
import re
import json
import urllib.parse
import urllib.request
import ssl

# --- CONFIGURACIÓN BASE ---
TMDB_API_KEY = "8baba8ab6b8bbe247645bcae7df63d0d"
ssl_context = ssl._create_unverified_context()

def fix_streaming_url(url):
    """Corrige enlaces de Dropbox y asegura acceso directo al flujo de video."""
    url = url.strip()
    if "dropbox.com" in url:
        if "dl=0" in url:
            url = url.replace("dl=0", "dl=1")
        elif "?" not in url:
            url += "?dl=1"
        elif "dl=1" not in url:
            url += "&dl=1"
            
        url = url.replace("www.dropbox.com", "dl.dropboxusercontent.com")
        url = url.replace("dl.dropbox.com", "dl.dropboxusercontent.com")

    return url

def clean_title_and_year(raw_title):
    """Limpia nombres sucios y separa el año."""
    title = raw_title.strip()
    
    if "|" in title:
        parts = title.split("|")
        title = parts[-1].strip()

    title = re.sub(r'\.(mp4|mkv|avi)$', '', title, flags=re.IGNORECASE)

    year_match = re.search(r'\(?\b(19\d\d|20\d\d)\b\)?', title)
    year = year_match.group(1) if year_match else ""
    if year:
        title = re.sub(r'\(?\b' + year + r'\b\)?', '', title)

    tags = r'\b(1080p|720p|480p|bluray|dvdrip|web-dl|latino|lat|sub|castellano|hdrip|dual|audio|h264|ac3|opc|opcion|online|completa|pelicula|cuevana|hdfull)\b'
    title = re.sub(tags, '', title, flags=re.IGNORECASE)

    title = re.sub(r'[-_.()\[\]{}]+', ' ', title).strip()
    title = re.sub(r'\s+', ' ', title)

    return title, year

def upgrade_poster_url(poster_url):
    """Convierte carátulas de baja resolución de TMDb a alta definición w500."""
    if not poster_url:
        return None
    if "themoviedb.org" in poster_url:
        poster_url = re.sub(r'/p/(w\d+|w\d+_and_h\d+_\w+)/', '/p/w500/', poster_url)
    return poster_url

def fetch_missing_metadata(title, year):
    """Consulta TMDb solo si la película no traía carátula en el M3U."""
    meta = {
        "title": title,
        "year": year,
        "poster": None,
        "backdrop": None,
        "rating": "",
        "genre": "",
        "overview": ""
    }
    try:
        query = urllib.parse.quote(title)
        url = f"https://api.themoviedb.org/3/search/movie?api_key={TMDB_API_KEY}&query={query}&language=es-MX&include_adult=false"
        if year:
            url += f"&primary_release_year={year}"

        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=3, context=ssl_context) as r:
            data = json.loads(r.read().decode('utf-8'))
            results = data.get('results', [])
            if results:
                item = results[0]
                meta["title"] = item.get("title", title)
                meta["year"] = item.get("release_date", "")[:4] or year
                meta["overview"] = item.get("overview", "")
                if item.get("vote_average"):
                    meta["rating"] = str(round(item["vote_average"], 1))
                if item.get("poster_path"):
                    meta["poster"] = f"https://image.tmdb.org/t/p/w500{item['poster_path']}"
                if item.get("backdrop_path"):
                    meta["backdrop"] = f"https://image.tmdb.org/t/p/w1280{item['backdrop_path']}"
    except Exception:
        pass
    return meta

def get_input_filename():
    """Determina qué archivo procesar según los argumentos pasados."""
    # 1. Si se pasó como argumento: python3 clean_playlist.py mi_archivo.m3u
    if len(sys.argv) > 1:
        return sys.argv[1].strip()

    # 2. Si existe un playlist.m3u por defecto en la carpeta
    if os.path.exists("playlist.m3u"):
        return "playlist.m3u"

    # 3. Preguntar al usuario en la terminal
    user_input = input("👉 Ingresa el nombre del archivo M3U a procesar: ").strip()
    return user_input

def process_playlist():
    input_file = get_input_filename()

    if not input_file or not os.path.exists(input_file):
        print(f"\n❌ Error: No se encontró el archivo '{input_file}'.")
        print("Uso correcto: python3 clean_playlist.py <nombre_de_archivo.m3u>\n")
        return

    # Nombres de salida automáticos basados en la entrada
    base_name = os.path.splitext(os.path.basename(input_file))[0]
    output_json = "cloud_movies.json"                    # El que leerá SOFIPLAY
    output_m3u = f"{base_name}_clean.m3u"               # M3U limpio para VLC/TV

    print(f"\n🚀 Procesando archivo: '{input_file}'...")
    print(f"📁 Salida para SOFIPLAY: '{output_json}'")
    print(f"📁 Salida lista M3U:    '{output_m3u}'\n")

    with open(input_file, "r", encoding="utf-8", errors="ignore") as f:
        lines = f.readlines()

    clean_movies = []
    seen_urls = set()
    seen_titles = set()

    current_meta = None
    total_parsed = 0
    discarded_non_mp4 = 0
    discarded_duplicates = 0

    for line in lines:
        line = line.strip()
        if not line:
            continue

        if line.startswith("#EXTINF"):
            total_parsed += 1
            logo_match = re.search(r'tvg-logo="([^"]+)"', line)
            poster = logo_match.group(1) if logo_match else None

            group_match = re.search(r'group-title="([^"]*)"', line)
            group = group_match.group(1) if group_match else "Nube"

            raw_title = line.split(",")[-1].strip()
            title, year = clean_title_and_year(raw_title)

            current_meta = {
                "raw_title": raw_title,
                "clean_title": title,
                "year": year,
                "group": group if group else "Nube",
                "poster": upgrade_poster_url(poster)
            }

        elif line.startswith("http://") or line.startswith("https://"):
            if not current_meta:
                continue

            raw_url = line

            # 1. Filtro estricto: solo enlaces MP4
            url_path = raw_url.split("?")[0].lower()
            if not url_path.endswith(".mp4"):
                discarded_non_mp4 += 1
                current_meta = None
                continue

            # 2. Corrección Dropbox (dl=1)
            fixed_url = fix_streaming_url(raw_url)

            # 3. Deduplicación
            title_key = current_meta["clean_title"].lower()
            if fixed_url in seen_urls or title_key in seen_titles:
                discarded_duplicates += 1
                current_meta = None
                continue

            seen_urls.add(fixed_url)
            seen_titles.add(title_key)

            # 4. Completar carátula si falta
            poster = current_meta["poster"]
            backdrop = None
            rating = "★ 7.5"
            overview = "Película disponible en streaming desde la nube."

            if not poster:
                meta = fetch_missing_metadata(current_meta["clean_title"], current_meta["year"])
                if meta["poster"]:
                    poster = meta["poster"]
                    backdrop = meta["backdrop"]
                    rating = f"★ {meta['rating']}" if meta['rating'] else rating
                    overview = meta["overview"] or overview
                    current_meta["clean_title"] = meta["title"]
                    current_meta["year"] = meta["year"] or current_meta["year"]

            movie_entry = {
                "id": f"cloud_{len(clean_movies) + 1}",
                "name": current_meta["clean_title"],
                "clean_title": current_meta["clean_title"],
                "year": current_meta["year"],
                "group": current_meta["group"],
                "type": "file",
                "direct_url": fixed_url,
                "poster": poster,
                "backdrop": backdrop or poster,
                "rating": rating,
                "overview": overview,
                "is_cloud": True
            }

            clean_movies.append(movie_entry)
            print(f"  [OK] {movie_entry['name']} ({movie_entry['year']})")

            current_meta = None

    # Guardar JSON listo para SOFIPLAY
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(clean_movies, f, ensure_ascii=False, indent=2)

    # Guardar M3U limpio
    with open(output_m3u, "w", encoding="utf-8") as f:
        f.write("#EXTM3U\n")
        for m in clean_movies:
            f.write(f'#EXTINF:-1 tvg-logo="{m["poster"] or ""}" group-title="{m["group"]}",{m["clean_title"]} ({m["year"]})\n')
            f.write(f'{m["direct_url"]}\n')

    print("\n" + "="*50)
    print(f"🎉 ¡PROCESO COMPLETADO CON ÉXITO!")
    print(f"  Total entradas leídas:        {total_parsed}")
    print(f"  Descartadas (no eran MP4):   {discarded_non_mp4}")
    print(f"  Descartadas (duplicadas):     {discarded_duplicates}")
    print(f"  ✅ Películas útiles listas:   {len(clean_movies)}")
    print(f"  📁 Archivos creados:")
    print(f"     - '{output_json}' (Para la app SOFIPLAY)")
    print(f"     - '{output_m3u}' (Para VLC / Smart TV)")
    print("="*50 + "\n")

if __name__ == "__main__":
    process_playlist()