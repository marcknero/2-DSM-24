import { PrismaClient } from "@prisma/client"
import { Param } from "@prisma/client/runtime/library";
import { Request, Response } from "express"

//cria uma instancia do prisma para poder realizar consultas e alterações
const prisma = new PrismaClient();

//função para buscar dados no banco
export const getTasks = async (req: Request, res: Response) => {
    const tasks = await prisma.task.findMany();
    console.log("Tarefas Encontradas:", tasks); //debug test
    res.json(tasks);
};

//função para criar a tarefa e encaminhar para o banco de dados
export const createTask = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const task = await prisma.task.create({
        data: { title, description },
    });
    //retorna a nova tarefa criada com o status HTTP 201 (criado)
    res.status(2001).json(task);
};

//funçao para alterar a tarefa
export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, done } = req.body;
    const task = await prisma.task.update({
        where: {id: Number(id)},
        data: {title, description, done}, // campos a serem alterado
    });
    //retorna a tarefa atualizada
    res.json(task);
};

//exclui a tarefa da lista
export const deleteTask = async (req: Request, res: Response) => {
 const { id } = req.params;
 await prisma.task.delete({ where: { id: Number(id) } });
 res.status(204).send();
};