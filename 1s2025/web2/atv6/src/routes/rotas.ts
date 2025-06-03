import { Router } from "express";
import { cidade, selected } from "../controllers/cidadeControllers";


const routes = Router();

routes.get("/cidade",cidade);
routes.get("/cidade/:selection",selected);
routes.get("*",(req,res)=>{
    res.json({"message:":"Rota inexistente"})
});

export default routes;