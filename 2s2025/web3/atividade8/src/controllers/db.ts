import mongoose from "mongoose";
import dotenv from "dotenv"; 

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/crud_planejaplus';

const connectDB = async ()=>{
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB conectado');
    } catch (err){
        console.error('erro ao conectar banco',err);
    }
};

export default connectDB;