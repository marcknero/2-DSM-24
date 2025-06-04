import { Request, Response } from "express";
import db from "./db";

export async function cidade(req: Request, res: Response) {
    try {
        const r = await db.query("select * from cidades");
        res.json(r.rows)
    } catch (e: any) {
        res.json({ message: e.message })
    }
}
export async function selected(req: Request, res: Response) {
    try {
        const selection = req.params.selection; // ou req.query.selection, conforme sua rota
        const r = await db.query(
            "SELECT i.* FROM incidencias i JOIN cidades c ON ST_Contains(i.geom, c.geom) WHERE c.id = $1;",
            [selection]
        );
        res.json(r.rows);
    } catch (e: any) {
        res.json({ message: e.message })
    }
}
