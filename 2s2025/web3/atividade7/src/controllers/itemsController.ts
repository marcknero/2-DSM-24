import { Request,Response } from "express";
import item from "../models/item";

//create expense
export const  createItem = async (req:Request, res:Response)=>{
    try{
        const newItem = new item(req.body);
        const saveItem = await newItem.save();
        res.status(201).json(saveItem);
    } catch (error) {
        res.status(500).json({message:'erro ao salvar Evento',error});
    }
};

//eventos list
export const getItems = async (req:Request, res: Response)=>{
    try{
        const items = await item.find();
        res.json(items);
    } catch (error){
        res.status(500).json({message:'erro ao buscar Evento', error});
    }
};

//update eventos
export const updateItem = async (req: Request, res: Response) => {
  try {
    const updatedItem = await item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem) return res.status(404).json({ error: 'Evento não encontrado' });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar Evento' });
  }
};

// delete Evento
export const deleteItem = async (req: Request, res: Response) => {
  try {
    const deletedItem = await item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: 'Evento não encontrado' });
    res.json({ message: 'Evento deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar Evento' });
  }
};