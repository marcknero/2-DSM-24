//importa o framework express, usado para gerenciar o servidor HTTP
import express from "express";
//importa o pacote dotenv, carrega as variaveis de ambiente do documento dotenv
import dotenv from "dotenv";
import path from "path"; // para resolver caminhos
import {taskRoutes} from "./routes/taskRoutes";

dotenv.config();
const app = express();

app.use(express.urlencoded({extended:true}));

//middleware para ler JSON no corpo da requisição
app.use(express.json());

//servir arquivos estáticos da pasta views
app.use(express.static(path.join(__dirname, "views")));

//rota para carregar html principal
app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname,"views","index.html"));
});

//rotas da api
app.use("/tasks", taskRoutes);

app.listen(3000, ()=>{
    console.log("Servidor Rodando em http://localhost:3000")
});

 

//utilizado anteriormente a alterado
// app.get("/", (req, res) => {
// res.send("API To-Do List está rodando! Acesse /task para usar.");
// });
 
// app.use("/tasks", taskRoutes);
 
// app.listen(3000, () => {
// console.log("Servidor rodando em http://localhost:3000");
// });
