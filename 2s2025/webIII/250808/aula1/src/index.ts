//importa o framework express, usado para gerenciar o servidor HTTP
import express from "express";
//importa o pacote dotenv, carrega as variaveis de ambiente do documento dotenv
import dotenv from "dotenv";
import {taskRoutes} from "./routes/taskRoutes";

dotenv.config();
const app = express();
app.use(express.json());
 
app.get("/", (req, res) => {
res.send("API To-Do List está rodando! Acesse /task para usar.");
});
 
app.use("/tasks", taskRoutes);
 
app.listen(3000, () => {
console.log("Servidor rodando em http://localhost:3000");
});
