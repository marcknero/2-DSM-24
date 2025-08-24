import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// Associate a pessoa to a carro
export const associatePessoaToCarro = async (req: Request, res: Response) => {
	try {
		const { pessoaId, carroId } = req.body;
		if (!pessoaId || !carroId) {
			return res.status(400).json({ error: "pessoaId e carroId são obrigatórios." });
		}
		const association = await prisma.pessoaPorCarro.create({
			data: {
				pessoaId: Number(pessoaId),
				carroId: Number(carroId),
			},
		});
		res.status(201).json(association);
	} catch (error) {
		res.status(500).json({ error: "Erro ao associar pessoa ao carro." });
	}
};

// List all associations
export const listAssociations = async (req: Request, res: Response) => {
	try {
		const associations = await prisma.pessoaPorCarro.findMany({
			include: {
				pessoa: true,
				carro: true,
			},
		});
		res.json(associations);
	} catch (error) {
		res.status(500).json({ error: "Erro ao listar associações." });
	}
};

// Delete an existing association
export const deleteAssociation = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		await prisma.pessoaPorCarro.delete({
			where: { id: Number(id) },
		});
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: "Erro ao deletar associação." });
	}
};
