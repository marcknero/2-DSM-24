import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// Busca tempo atual por nome da cidade
async function getWeatherByCity(city: string) {
    const apikey = process.env.API_KEY;
    if (!apikey) throw new Error('API_KEY not set');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&lang=pt_br&appid=${apikey}`;
    const resp = await axios.get(url);
    return resp.data;
}

// Rota: busca por cidade
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/consult', async (req, res) => {
    const city = String(req.query.city || '').trim();
    if (!city) return res.status(400).json({ error: "Parâmetro 'city' é obrigatório" });
    try {
        const data = await getWeatherByCity(city);
        res.json(data);
    } catch (err: any) {
        console.error(err?.response?.data || err.message || err);
        const status = err?.response?.status || 500;
        const message = err?.response?.data?.message || 'Erro ao obter dados meteorológicos';
        res.status(status).json({ error: message });
    }
});

app.use(express.static(path.join(__dirname, '../views')));

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));

