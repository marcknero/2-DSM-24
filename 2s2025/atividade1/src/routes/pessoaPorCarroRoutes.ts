import { Router } from "express";
import { associatePessoaToCarro, listAssociations, deleteAssociation } from "../controller/pessoaPorCarroController";

const router = Router();

router.post("/associar", associatePessoaToCarro);
router.get("/associacoes", listAssociations);
router.delete("/associacoes/:id", deleteAssociation);

export default router;
