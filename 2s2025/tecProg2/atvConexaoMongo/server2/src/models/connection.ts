 import mongoose from "mongoose";

 const uri = "mongodb://127.0.0.1:27017/dbserver2";


 export function connect(){
 mongoose.connect(
    uri,
    {serverSelectionTimeoutMS:5000,
        maxPoolSize:10,
    }
 ).then(
    ()=> console.log('Conectado ao MongoDB')
 ).catch(
    (e)=>{ console.error("Erro ao conectar ao mongoDB:", e.message);}
 );

 process.on('SIGINT',async()=>{
    try{
        console.log('conexão com mongodb Fechada');
        await mongoose.connection.close();
        process.exit(0);
    }catch (error){
        console.error('Erro ao fechar a conexao com mongo:',error);
        process.exit(1);
    }
 })
}