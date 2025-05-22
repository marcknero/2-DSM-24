import { Router } from "express";
import { concursos, last, selected } from "../controllers/MegaController";

const routes = Router();

routes.get("/",last);
routes.get("/concursos",concursos);
routes.get("/:selection",selected);

export default routes;