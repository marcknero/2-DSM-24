import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // URL do servidor
});

export default api;