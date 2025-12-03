import { Router } from "express";
import { createOrder,getOrders,deleteOrder,updateOrder } from "../controllers/orderController";
import { create } from "domain";

const router = Router();

router.post('/',createOrder);
router.get('/', getOrders);
router.put('/:id',updateOrder);
router.delete('/:id',deleteOrder);

export default router;