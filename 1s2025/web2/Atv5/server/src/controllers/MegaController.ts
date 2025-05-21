import { Request, Response } from "express";
import db from "./db";

export async function last(req:Request, res:Response){
try{
    const r = await db.query("select * from megasena order by concurso desc");
    res.json(r.rows)
} catch(e:any){
    res.json({message: e.message})
}
}