import { Router } from "express";
import { addTelefone, deleteTelefone, updateTelefone } from "../controller/telefoneController";

const router = Router();

router.post("/", addTelefone);
router.delete("/:telefoneId", deleteTelefone);
export default router;
