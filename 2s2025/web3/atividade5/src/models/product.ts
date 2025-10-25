import mongoose from 'mongoose';

//Products interface
export interface IProduct extends mongoose.Document{
  formato: String;
  titulo: String;
  artista: String;
  ano: Number;
  genero: String;
  preco: Number
};

//Products Schema
const ProductSchema = new mongoose.Schema({
  formato: {type:String,required:true},
  titulo: {type:String,required:true},
  artista: {type:String,required:true},
  ano: {type:Number,required:true},
  genero: {type:String,required:true},
  preco: {type:Number,required:true},
});

export default mongoose.model<IProduct>('Product',ProductSchema);

