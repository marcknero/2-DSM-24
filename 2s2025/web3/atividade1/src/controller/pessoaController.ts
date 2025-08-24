import { PrismaClient } from "@prisma/client"
import { Param } from "@prisma/client/runtime/library";
import { Request, Response } from "express"

//cria uma instancia do prisma para poder realizar consultas e alterações
const prisma = new PrismaClient();

//buscar todas as Pessoas
export const getPessoa = async (req: Request, res: Response) => {
    try {
    const pessoas  = await prisma.pessoa.findMany({
      include: { telefones: true }
    });
    res.json(pessoas);
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar Pessoas!"})
    }
};

//buscar pessoa por id
export const getPessoaoById = async (req: Request, res: Response) => {
  try {
    const idParam = req.params.id;
    if (typeof idParam === "undefined") {
      return res.status(400).json({ error: "ID da Pessoa não fornecido!" });
    }
    const id = parseInt(idParam.toString());
    const pessoa = await prisma.pessoa.findUnique({
      where: { idPessoa: id },
      include: { telefones: true }
    });

    if (!pessoa) {
      return res.status(404).json({ error: "Pessoa não encontrado!" });
    }

    res.json(pessoa);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Pessoa!" });
  }
};

//função para criar a Pessoa e encaminhar para o banco de dados
export const createPessoa = async (req: Request, res: Response) => {
    try {
        const { nome,email } = req.body;
        
        if (!nome || !email){
            return res.status(400).json({error:"nome e email são obrigatorios!!"});
        }
        
        const newPessoa = await prisma.pessoa.create({
        data: { nome, email },
    });
    //retorna a nova Pessoa criada com o status HTTP 201 (criado)
    res.status(201).json(newPessoa);
} catch (error){
    res.status(500).json({error: "erro ao criar pessoa"});
}
};

//funçao para atualizar a Pessoa
export const updatePessoa = async (req: Request, res: Response) => {
    try {
    const { idPessoa } = req.params;
    const { nome, email, carros } = req.body;
    
    const updatedPessoa = await prisma.pessoa.update({
        where: {idPessoa: Number(idPessoa)},
        data: {nome, email, carros}, // campos a serem alterado
    });
    //retorna a Pessoa atualizada
    res.json(updatedPessoa);
} catch (error) {
    res.status(500).json({erros:"Erro ao atualizar pessoa!"});
}
};

//exclui a Pessoa da lista
export const deletePessoa = async (req: Request, res: Response) => {
  try {
    const { idPessoa } = req.params;
    const pessoaId = Number(idPessoa);
    // Delete related telefones
    await prisma.telefone.deleteMany({ where: { pessoaId: pessoaId } });
    // Delete related associations
    await prisma.pessoaPorCarro.deleteMany({ where: { pessoaId: pessoaId } });
    // Delete pessoa
    await prisma.pessoa.delete({ where: { idPessoa: pessoaId } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "erro ao deletar usuário" });
  }
};

