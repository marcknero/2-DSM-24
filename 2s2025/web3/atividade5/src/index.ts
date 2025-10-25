import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import Product from './models/product';
import product from './models/product';

const app = express();
const PORT = 3000;
const MONGODB_URI = "mongodb://localhost:27017/crud_music_store";

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('views'));
app.use(express.json());

//DBconnection
mongoose.connect(MONGODB_URI).then(()=>console.log('MongoDb conectado')).catch(err => console.log('Erro ao conectar ao Banco',err));

//adding product route
app.post('/products', async(req,res)=> {
  try{
    const newProduct = new Product({
      formato: req.body.formato,
      titulo: req.body.titulo,
      artista: req.body.artista,
      ano: parseFloat(req.body.ano),
      genero: req.body.genero,
      preco: parseFloat(req.body.preco)
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({message:'- erro ao salvar produto', error})
  }
});

//list all products route
app.get('/products', async(req,res)=>{
  try{
    const products = await Product.find();
    res.json(products);
  } catch (error){
    res.status(500).json({message:' - erro ao buscar livros no banco'});
  }
});

//update product route
app.put('/products/:id', async(req,res)=>{
  const {id} = req.params;
  const {formato,titulo,artista,ano,genero,preco} = req.body;
  try{
    const updatedProduct = await Product.findByIdAndUpdate(id,{formato,titulo,artista,ano,genero,preco},{new:true});
    if(!updatedProduct){
      return res.status(404).json({error:' - produto nao encontrado'});
    }
    res.json(updatedProduct)
  } catch (error){
    res.status(400).json({error:' - Erro ao atualizar produto'});
  }
});

//delete route
app.delete('/products/:id',async(req,res)=>{
  const {id} = req.params;
  try{
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct){
      return res.status(404).json({error:'produto nao encontrado'});
    }
    res.json({message:'Produto deletado com sucesso'});
  } catch (error){
    res.status(400).json({error:'erro ao deletar produto'});
  }
});

//server start
app.listen(PORT,()=>{
  console.log(`servidor rodando em http://localhost:${PORT}`)
});
