import { Request,Response } from "express";
import expense from "../models/expenses";

//create expense
export const  createExpense = async (req:Request, res:Response)=>{
    try{
        const newExpense = new expense(req.body);
        const saveExpense = await newExpense.save();
        res.status(201).json(saveExpense);
    } catch (error) {
        res.status(500).json({message:'erro ao salvar despesa',error});
    }
};

//expenses list
export const getExpenses = async (req:Request, res: Response)=>{
    try{
        const expenses = await expense.find();
        res.json(expenses);
    } catch (error){
        res.status(500).json({message:'erro ao buscar despesa', error});
    }
};

//update expense
export const updateExpense = async (req: Request, res: Response) => {
  try {
    const updatedExpense = await expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedExpense) return res.status(404).json({ error: 'despesa não encontrado' });
    res.json(updatedExpense);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar despesa' });
  }
};

// delete Expense
export const deleteExpense = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await expense.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ error: 'Expense não encontrado' });
    res.json({ message: 'Expense deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar Expense' });
  }
};

export const getTotalExpenses = async (req: Request, res: Response) => {
  try {
    // tenta somar convertendo para número (aceita amount como string ou number)
    const agg = await expense.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: { $toDouble: "$amount" } }
        }
      }
    ]);

    const totalAmount = (Array.isArray(agg) && agg.length > 0 && agg[0].total != null)
      ? agg[0].total
      : 0;

    return res.json({ total: totalAmount });
  } catch (error) {
    console.error('getTotalExpenses error:', error);
    return res.status(500).json({ error: 'Erro ao obter total de despesas' });
  }
};