// api/proxy.js
export default async function handler(req, res) {
    const { query } = req;
    const url = query.url; // Obtén la URL del streaming desde los parámetros de consulta

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        // Reenvía los encabezados de respuesta
        res.status(response.status);
        response.body.pipe(res); // Pasa el cuerpo de la respuesta al cliente
    } catch (error) {
        console.error('Error fetching the URL:', error);
        res.status(500).json({ error: 'Error fetching the URL' });
    }
}
