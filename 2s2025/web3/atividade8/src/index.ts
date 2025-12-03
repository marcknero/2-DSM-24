import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import itemRoutes from './routes/orderRoutes';
import connectDB from './controllers/db';
import dotenv from 'dotenv'; 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

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