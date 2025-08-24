import { Router } from "express";
import { getPessoa, getPessoaoById, createPessoa, updatePessoa, deletePessoa } from "../controller/pessoaController";

const router = Router();

router.get("/", getPessoa);
router.get("/:id", getPessoaoById);
router.post("/", createPessoa);
router.put("/:idPessoa", updatePessoa);
router.delete("/:idPessoa", deletePessoa);

export default router;
