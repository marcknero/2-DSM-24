"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.geocodeCity = geocodeCity;
exports.getWeather = getWeather;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
/**
 * Faz geocoding de nome de cidade -> { lat, lon, name, country }
 */
function geocodeCity(city) {
    return __awaiter(this, void 0, void 0, function* () {
        const apikey = process.env.API_KEY;
        if (!apikey)
            throw new Error("API_KEY not set in environment");
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${apikey}`;
        const resp = yield axios_1.default.get(url);
        const arr = resp.data;
        if (!Array.isArray(arr) || arr.length === 0)
            return null;
        const { lat, lon, name, country } = arr[0];
        return { lat, lon, name, country };
    });
}
/**
 * Busca previsão por lat/lon (current + daily + alerts).
 */
function getWeather(lat, lon) {
    return __awaiter(this, void 0, void 0, function* () {
        const apikey = process.env.API_KEY;
        if (!apikey)
            throw new Error("API_KEY not set in environment");
        // Exclui minutely e hourly; mantém current, daily e alerts
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${apikey}&lang=pt_br`;
        const resp = yield axios_1.default.get(url);
        return resp.data;
    });
}
app.use(express_1.default.static(path_1.default.join(__dirname, "../views")));
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../views/index.html"));
});
/**
 * Rota para transformar cidade -> lat/lon
 * GET /geocode?city=NomeDaCidade
 */
app.get("/geocode", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const city = String(req.query.city || "").trim();
    if (!city) {
        return res.status(400).json({ error: "Parâmetro 'city' é obrigatório" });
    }
    try {
        const result = yield geocodeCity(city);
        if (!result)
            return res.status(404).json({ error: "Cidade não encontrada" });
        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao consultar geocoding" });
    }
}));
/**
 * Rota para buscar previsão por lat/lon
 * GET /consult?lat=...&lon=...
 */
app.get("/consult", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lat = parseFloat(String(req.query.lat || ""));
    const lon = parseFloat(String(req.query.lon || ""));
    if (Number.isNaN(lat) || Number.isNaN(lon)) {
        return res.status(400).json({ error: "Parâmetros 'lat' e 'lon' inválidos" });
    }
    try {
        const data = yield getWeather(lat, lon);
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao obter dados meteorológicos" });
    }
}));
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map