import mongoose from "mongoose";

//interface para o livro
export interface ILivro extends mongoose.Document {
  titulo: string;
  autor: string;
  ano: number;
}

//schema para o livro
const LivroSchema = new mongoose.Schema({
  titulo: {type: String, required: true},
  autor: {type: String, required: true},
  ano: {type: Number, required: true}
});

//exportar o modelo
export default mongoose.model<ILivro>('Livro', LivroSchema);