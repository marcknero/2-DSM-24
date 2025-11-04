const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

// Conexão com MongoDB
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

app.get('/produtos', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('rede_games');
    const produtos = await db.collection('produtos')
      .find({}, { projection: { nome: 1, preco: 1, _id: 0 } })
      .limit(5)
      .toArray();

    res.json(produtos);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar produtos', detalhes: error.message });
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


//quando montamos um crud, utilizando o express, e uma biblioteca como mongoose definindo as variaveis de ambiente em um arquivo .env - porem o presente atende apenas o solicitado no exercicio proposto, sem mais nem menos, fazendo uso do Node.js e Express, sem nanhuma biblioteca ou dependencia adicional.
