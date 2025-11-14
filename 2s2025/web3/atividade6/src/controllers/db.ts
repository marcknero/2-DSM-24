import mongoose from "mongoose";

const MONGODB_URI = 'mongodb://localhost:27017/crud_expenses';

const connectDB = async ()=>{
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB conectado');
    } catch (err){
        console.error('erro ao conectar banco',err);
    }
};

export default connectDB;