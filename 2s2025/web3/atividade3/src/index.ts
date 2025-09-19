import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import Livro from './models/livro';

const app = express();
const PORT = 3000;
const MONGODB_URI = 'mongodb://localhost:27017/crud_livros';

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

//conectar ao mongo
mongoose.connect(MONGODB_URI).then(()=>console.log('MongoDB Conectado')).catch(err=> console.log('Erro ao Conectar ao Mongo', err));

//rota para cadastrar um livro
app.post('/livros', async(req,res)=>{
  try {
    const novoLivro = new Livro({
      titulo: req.body.titulo,
      autor: req.body.autor,
      ano: req.body.ano
    });
    const livroSalvo = await novoLivro.save();
    res.status(201).json(livroSalvo);
  } catch (error) {
    res.status(500).json({message:'erro ao cadastrar livro', error});
  }
});

//rota para listar livros
app.get('/livros',async(req,res)=>{
  try{
    const livros = await Livro.find();
    res.json(livros);
  } catch (error) {
    res.status(500).json({error:'erro ao buscar livros'});
  }
});

//rota para atualizar um livro
app.put('/livros/:id', async(req,res)=>{
  const {id} = req.params;
  const {titulo,autor,ano} = req.body;
  try{
    const livroAtualizado = await Livro.findByIdAndUpdate(id,{titulo,autor,ano},{new:true});
    if(!livroAtualizado){
      return res.status(404).json({erros:'livro não encontrado'});
    }
    res.json(livroAtualizado);
  } catch (error) {
    res.status(400).json({error:'erro ao atualizar livro'});
  }
});

