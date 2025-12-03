import { Router } from "express";
import { createItem,updateItem,deleteItem,getItems } from "../controllers/itemsController";
import { create } from "domain";

const router = Router();

router.post('/',createItem);
router.get('/', getItems);
router.put('/:id',updateItem);
router.delete('/:id',deleteItem);

export default router;