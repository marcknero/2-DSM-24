import { Request, Response } from "express";
import db from "./db";

export async function last(req: Request, res: Response) {
    try {
        const r = await db.query("select * from megasena order by concurso desc limit 1");
        res.json(r.rows)
    } catch (e: any) {
        res.json({ message: e.message })
    }
}
export async function selected(req: Request, res: Response) {
    try {
        const selection = req.params.selection; // ou req.query.selection, conforme sua rota
        const r = await db.query(
            "SELECT * FROM megasena WHERE concurso = $1",
            [selection]
        );
        res.json(r.rows);
    } catch (e: any) {
        res.json({ message: e.message })
    }
}
export async function concursos(req: Request, res: Response) {
    try {
        const r = await db.query(
            "SELECT concurso FROM megasena ORDER BY concurso DESC"            
        );
        res.json(r.rows);

    } catch (e: any) {
        res.json({ message: e.message })
    }
}