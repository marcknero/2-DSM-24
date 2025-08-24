import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
//cria uma instancia do prisma para poder realizar consultas e alterações
const prisma = new PrismaClient();

//buscar todas as carros
export const getCarros = async (req: Request, res: Response) => {
    try {
    const carros = await prisma.carro.findMany();
    res.json(carros);
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar carros!"})
    }
};
//buscar buscar carro por id
export const getCarroById = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    if (typeof idParam === "undefined") {
      return res.status(400).json({ error: "ID do carro não fornecido!" });
    }
    const id = parseInt(idParam.toString());
    const carro = await prisma.carro.findUnique({
      where: { idCarro: id },
    });

    if (!carro) {
      return res.status(404).json({ error: "Carro não encontrado!" });
    }

    res.json(carro);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar carro!" });
  }
};

//função para criar carro e encaminhar para o banco de dados
export const createCarro = async (req: Request, res: Response) => {
    try {
        const { modelo, marca, ano } = req.body;
        
        if (!modelo || !marca || !ano){
            return res.status(400).json({error:"Titulo e descrição são obrigatórios"});
        }
        
        const newTask = await prisma.carro.create({
        data: { modelo, marca, ano },
    });
    //retorna a novcarro criada com o status HTTP 201 (criado)
    res.status(201).json(newTask);
} catch (error){
    res.status(500).json({error: "erro ao criar carro!"});
}
};

//funçao para alterar carro
export const updateCarro = async (req: Request, res: Response) => {
    try {
    const { id } = req.params;
    const { modelo, marca, ano, done } = req.body;
    
    const updatedTask = await prisma.carro.update({
        where: {idCarro: Number(id)},
        data: {modelo, marca, ano}, // campos a serem alterado
    });
    //retorna carro atualizada
    res.json(updatedTask);
} catch (error) {
    res.status(500).json({erros:"Erro ao atualizar carro!"});
}
};

//exclui carro da lista
export const deleteCarro = async (req: Request, res: Response) => {
 try{
 const { id } = req.params;
 await prisma.carro.delete({ where: { idCarro: Number(id) } });
 res.status(204).send();
 } catch(error){
    res.status(500).json({error:"Erro ao deletar carro!"});
 }
};