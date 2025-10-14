import subprocess
import os
import sys

def purgar_lista_m3u_final(archivo_entrada_m3u, archivo_salida_m3u):
    """
    Lee una lista de reproducción .m3u, verifica el estado de cada URL 
    mostrando el progreso, y crea una nueva lista .m3u solo con los canales activos.
    """
    print(f"Leyendo y analizando canales desde: {archivo_entrada_m3u}")
    
    canales_a_verificar = []
    canales_activos = []

    try:
        with open(archivo_entrada_m3u, 'r', encoding='utf-8', errors='ignore') as f_entrada:
            lineas = f_entrada.readlines()

        # --- Bloque de Análisis Robusto ---
        i = 0
        while i < len(lineas):
            linea = lineas[i].strip()
            if linea.startswith('#EXTINF:'):
                info_canal = linea
                for j in range(i + 1, len(lineas)):
                    url_potencial = lineas[j].strip()
                    if url_potencial and not url_potencial.startswith('#'):
                        canales_a_verificar.append({'info': info_canal, 'url': url_potencial})
                        i = j
                        break
            i += 1
        
        if not canales_a_verificar:
            print("No se encontraron canales válidos (#EXTINF con URL) en el archivo de entrada.")
            return

        total_canales = len(canales_a_verificar)
        print(f"Análisis completo. Se encontraron {total_canales} canales para verificar.")
        print("-" * 30)

        # --- Bloque de Verificación con Contador de Progreso ---
        for idx, canal in enumerate(canales_a_verificar, start=1):
            url = canal['url']
            print(f"({idx}/{total_canales}) Verificando: {url}")
            try:
                resultado = subprocess.run(
                    ['curl', '-I', '-L', '--connect-timeout', '10', url],
                    capture_output=True, text=True, check=False, errors='ignore'
                )

                if resultado.stdout:
                    status_lines = [line for line in resultado.stdout.strip().split('\n') if 'HTTP/' in line]
                    if status_lines:
                        ultima_linea_status = status_lines[-1]
                        codigo_estado = int(ultima_linea_status.split()[1])
                        if 200 <= codigo_estado < 300:
                            print(f"  -> Estado: {codigo_estado} (Activo)")
                            canales_activos.append(canal)
                        else:
                            print(f"  -> Estado: {codigo_estado} (Inactivo)")
                    else:
                        print("  -> No se pudo determinar el código de estado HTTP.")
                else:
                    error_msg = resultado.stderr.strip()
                    print(f"  -> Error al verificar. {error_msg}")

            except FileNotFoundError:
                print("Error: El comando 'curl' no se encontró. Asegúrate de que esté instalado.")
                return
            except Exception as e:
                print(f"  -> Ocurrió un error inesperado al verificar la URL: {e}")
        
        print("-" * 30)

        # --- Bloque de Escritura ---
        if canales_activos:
            with open(archivo_salida_m3u, 'w', encoding='utf-8') as f_salida:
                f_salida.write("#EXTM3U\n")
                f_salida.write("# Creado por el Purgador de Listas de appjava.dev\n\n")
                for canal_activo in canales_activos:
                    f_salida.write(f"{canal_activo['info']}\n")
                    f_salida.write(f"{canal_activo['url']}\n")
            
            print(f"Proceso completado. Se encontraron {len(canales_activos)} canales activos de un total de {total_canales}.")
            print(f"La lista purgada ha sido guardada en: {archivo_salida_m3u}")
        else:
            print("No se encontraron canales activos para guardar en la nueva lista.")

    except FileNotFoundError:
        print(f"Error: El archivo de entrada '{archivo_entrada_m3u}' no se encontró.")
    except Exception as e:
        print(f"Ocurrió un error general inesperado: {e}")


if __name__ == "__main__":
    
    # 1. Comprobar si se pasó un argumento (el nombre base del archivo)
    if len(sys.argv) < 2:
        print("Error: No se especificó el nombre del archivo de entrada.")
        print(f"Uso: python {os.path.basename(sys.argv[0])} <nombre_del_archivo_sin_extension>")
        sys.exit(1)

    # 2. Obtener el nombre base del archivo desde el argumento
    nombre_base_entrada = sys.argv[1]
    
    # 3. Construir el nombre completo del archivo de entrada añadiendo la extensión .m3u
    archivo_m3u_entrada = f"{nombre_base_entrada}.m3u"

    # 4. Comprobar si el archivo de entrada construido existe
    if not os.path.exists(archivo_m3u_entrada):
        print(f"Error: El archivo de entrada '{archivo_m3u_entrada}' no se encontró.")
        sys.exit(1)

    # 5. Generar el nombre del archivo de salida automáticamente
    nombre_base_salida, extension = os.path.splitext(archivo_m3u_entrada)
    archivo_m3u_salida = f"{nombre_base_salida}_purged{extension}"

    # 6. Llamar a la función principal con los nombres de archivo definidos
    purgar_lista_m3u_final(archivo_m3u_entrada, archivo_m3u_salida)