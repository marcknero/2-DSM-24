import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import itemRoutes from './routes/itemsRoutes';
import connectDB from './controllers/db';

const app = express();
const PORT = 3000;

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('views'));
app.use(express.json());

//db connection
connectDB();

//routes
app.use('/items', itemRoutes);

//start aplication server
app.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});