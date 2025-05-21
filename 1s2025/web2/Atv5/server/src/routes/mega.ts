import { Router } from "express";
import { last } from "../controllers/MegaController";

const routes = Router();

routes.get("/",last);

export default routes;