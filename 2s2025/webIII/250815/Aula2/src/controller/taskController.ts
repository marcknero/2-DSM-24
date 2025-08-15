import { PrismaClient } from "@prisma/client"
import { Param } from "@prisma/client/runtime/library";
import { Request, Response } from "express"

//cria uma instancia do prisma para poder realizar consultas e alterações
const prisma = new PrismaClient();

//buscar todas as tarefas
export const getTasks = async (req: Request, res: Response) => {
    try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar Tarefas!"})
    }
};

//função para criar a tarefa e encaminhar para o banco de dados
export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        
        if (!title || !description){
            return res.status(400).json({error:"Titulo e descrição são obrigatórios"});
        }
        
        const newTask = await prisma.task.create({
        data: { title, description },
    });
    //retorna a nova tarefa criada com o status HTTP 201 (criado)
    res.status(201).json(newTask);
} catch (error){
    res.status(500).json({error: "erro ao criar tarefa!"});
}
};

//funçao para alterar a tarefa
export const updateTask = async (req: Request, res: Response) => {
    try {
    const { id } = req.params;
    const { title, description, done } = req.body;
    
    const updatedTask = await prisma.task.update({
        where: {id: Number(id)},
        data: {title, description, done}, // campos a serem alterado
    });
    //retorna a tarefa atualizada
    res.json(updatedTask);
} catch (error) {
    res.status(500).json({erros:"Erro ao atualizar tarefa!"});
}
};

//exclui a tarefa da lista
export const deleteTask = async (req: Request, res: Response) => {
 try{
 const { id } = req.params;
 await prisma.task.delete({ where: { id: Number(id) } });
 res.status(204).send();
 } catch(error){
    res.status(500).json({error:"Erro ao deletar tarefa!"});
 }
};