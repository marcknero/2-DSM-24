import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import itemsRoutes from './routes/itemsRoutes'

const app = express();

//middleware
app.use(express.json());

//conection with mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/shop_list").then(() => console.log("conectado ao MongoDB")).catch((erro) => console.log("Erro ao conectar:", erro));

//API routes
app.use("/items",itemsRoutes);

//front-end server from public directory
app.use(express.static(path.join(__dirname,"../public")));

//start the server
app.listen(3000, ()=>{
    console.log("servidor esta rodando em http://localhost:3000")
})