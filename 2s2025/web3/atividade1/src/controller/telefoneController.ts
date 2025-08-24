import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

// Atualizar telefone de uma pessoa
export const updateTelefone = async (req: Request, res: Response) => {
  try {
    const { telefoneId } = req.params;
    const { numero } = req.body;
    if (!numero) {
      return res.status(400).json({ error: "Número é obrigatório." });
    }
    const telefone = await prisma.telefone.update({
      where: { telefoneId: Number(telefoneId) },
      data: { numero },
    });
    res.json(telefone);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar telefone!" });
  }
};

const prisma = new PrismaClient();

// Registrar telefone para uma pessoa
export const addTelefone = async (req: Request, res: Response) => {
  try {
    const { pessoaId, numero } = req.body;
    if (!pessoaId || !numero) {
      return res.status(400).json({ error: "pessoaId e número são obrigatórios." });
    }
    const telefone = await prisma.telefone.create({
      data: {
        pessoaId: Number(pessoaId),
        numero,
      },
    });
    res.status(201).json(telefone);
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar telefone." });
  }
};

// Excluir telefone de uma pessoa
export const deleteTelefone = async (req: Request, res: Response) => {
  try {
    const { telefoneId } = req.params;
    await prisma.telefone.delete({
      where: { telefoneId: Number(telefoneId) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir telefone." });
  }
};
