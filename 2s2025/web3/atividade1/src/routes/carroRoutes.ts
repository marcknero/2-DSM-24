import { Router } from "express";
import { getCarros, getCarroById, createCarro, updateCarro, deleteCarro } from "../controller/carroController";

const router = Router();

router.get("/", getCarros);
router.get("/:id", getCarroById);
router.post("/", createCarro);
router.put("/:id", updateCarro);
router.delete("/:id", deleteCarro);

export default router;
