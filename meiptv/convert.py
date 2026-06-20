import json
import sys
import os

def m3u_a_json(archivo_m3u, archivo_json):
    canales = [
        {
            "id": "ch0",
            "name": "Select Channel",
            "link": "#"
        }
    ]
    
    contador_id = 1
    nombre_actual = None
    
    try:
        # Leemos el archivo m3u
        with open(archivo_m3u, 'r', encoding='utf-8') as f:
            for linea in f:
                linea = linea.strip()
                
                if not linea:
                    continue
                
                if linea.startswith('#EXTINF:'):
                    nombre_actual = linea.split(',')[-1].strip()
                    
                elif not linea.startswith('#') and nombre_actual:
                    canales.append({
                        "id": f"ch{contador_id}",
                        "name": nombre_actual,
                        "link": linea
                    })
                    contador_id += 1
                    nombre_actual = None

        # Guardamos los resultados en el archivo JSON
        with open(archivo_json, 'w', encoding='utf-8') as f:
            json.dump(canales, f, indent=2, ensure_ascii=False)
            
        print(f"¡Éxito! Se han convertido {contador_id - 1} canales.")
        print(f"Archivo guardado como: {archivo_json}")

    except Exception as e:
        print(f"Ocurrió un error al procesar el archivo: {e}")

if __name__ == "__main__":
    # Comprobamos que el usuario haya pasado el argumento en la terminal
    if len(sys.argv) != 2:
        print("Uso incorrecto.")
        print("Ejemplo de uso: python3 convertir.py <nombre-archivo.m3u>")
        sys.exit(1)

    # Obtenemos el nombre del archivo de entrada desde la terminal
    archivo_entrada = sys.argv[1]

    # Validamos que el archivo realmente exista antes de continuar
    if not os.path.isfile(archivo_entrada):
        print(f"Error: El archivo '{archivo_entrada}' no existe en esta carpeta.")
        sys.exit(1)

    # Separamos el nombre del archivo de su extensión (.m3u)
    nombre_base, extension = os.path.splitext(archivo_entrada)
    
    # Creamos el nuevo nombre agregando .json
    archivo_salida = f"{nombre_base}.json"

    # Ejecutamos la función
    m3u_a_json(archivo_entrada, archivo_salida)