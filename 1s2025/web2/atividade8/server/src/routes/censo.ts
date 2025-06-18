import { Router } from "express";
import { list, getByPoint, listCities } from "../controllers/CensoController";

const routes = Router();

routes.get("/", list);
routes.get("/point", getByPoint);
routes.get("/cities", listCities); // Nova rota para listar cidades

export default routes;