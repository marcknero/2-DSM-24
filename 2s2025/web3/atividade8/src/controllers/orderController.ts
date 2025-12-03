import { Request,Response } from "express";
import order from "../models/order";

//create order
export const  createOrder = async (req:Request, res:Response)=>{
    try{
        const newOrder = new order(req.body);
        const saveOrder = await newOrder.save();
        res.status(201).json(saveOrder);
    } catch (error) {
        res.status(500).json({message:'erro ao salvar Ordem',error});
    }
};

//orders list
export const getOrders = async (req:Request, res: Response)=>{
    try{
        const orders = await order.find();
        res.json(orders);
    } catch (error){
        res.status(500).json({message:'erro ao buscar Ordem', error});
    }
};

//update orders
export const updateOrder = async (req: Request, res: Response) => {
  try {
    const updatedOrder = await order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedOrder) return res.status(404).json({ error: 'Ordem não encontrada' });
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar Ordem' });
  }
};

// delete Ordem
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const deletedOrder = await order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).json({ error: 'Ordem não encontrada' });
    res.json({ message: 'Ordem deletada com sucesso' });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar Ordem' });
  }
};