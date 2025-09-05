import { Router, Request, Response } from "express";
import Items from "../models/Items";

const router = Router();

//rout POST - criate new Item
router.post("/", async (req: Request, res: Response) => {
    try {
        const newItem = new Items(req.body);
        const itemSaved = await newItem.save();
        res.status(201).json(itemSaved);
    } catch (erro: unknown) {
        if (erro instanceof Error) {
            res.status(400).json({ erro: erro.message });
        } else {
            res.status(400).json({ erro: String(erro) });
        }
    }
});

//route GET - get the list of items from db
router.get("/", async (req: Request, res: Response) => {
    try {
        const items = await Items.find();
        res.json(items);
    } catch (erro: unknown) {
        if (erro instanceof Error) {
            res.status(500).json({ erro: erro.message });
        } else {
            res.status(500).json({ erro: String(erro) });
        }
    }
});

//route PUT - to update the items on DB
router.put("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const UpdatedItem = await Items.findByIdAndUpdate(id, req.body, { new: true });

        //in case don't find the item
        if (!UpdatedItem) { return res.status(404).json({ erro: "Item não cadastrado" }) };

        //take the response if not invalid
        res.json(UpdatedItem);
    } catch (erro: unknown) {
        if (erro instanceof Error) {
            res.status(400).json({ erro: erro.message });
        } else {
            res.status(400).json({ erro: String(erro) });
        }
    }

});

//route to delete items
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const deletedItem = await Items.findByIdAndDelete(id);

        //in case thi item isn't find
        if(!deletedItem){return res.status(404).json({erro: "Item não encontrado"})};

        res.json({mensagem: "item excluido com sucesso!"})
    } catch(erro:unknown) {
        if(erro instanceof Error){
            res.status(400).json({erro: erro.message});
        } else {
            res.status(400).json({erro: String(erro)});
        }
    }
});

export default router;