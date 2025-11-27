import express from 'express';
import cors from 'cors';
import routers from './routes';
import dotenv from 'dotenv';
import { connect } from './models/connection';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
// app.use('/api',userRoutes);

connect();


app.listen(PORT,()=> console.log(`servidor rodando na porta ${PORT}`));

app.use(routers)