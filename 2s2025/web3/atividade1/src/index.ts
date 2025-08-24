//importa o framework express, usado para gerenciar o servidor HTTP
//importa o pacote dotenv, carrega as variaveis de ambiente do documento dotenv
import express from "express";
import dotenv from "dotenv";
import path from "path"; // para resolver caminhos
import pessoaRoutes from "./routes/pessoaRoutes";
import carroRoutes from "./routes/carroRoutes";
import pessoaPorCarroRoutes from "./routes/pessoaPorCarroRoutes";
import telefoneRoutes from "./routes/telefoneRoutes";

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

// Use routes
app.use("/pessoas",pessoaRoutes);
app.use("/carros",carroRoutes);
app.use("/pessoa_por_carro",pessoaPorCarroRoutes);
app.use("/telefones",telefoneRoutes);

app.listen(3000, ()=>{
    console.log("Servidor Rodando em http://localhost:3000")
});

 
