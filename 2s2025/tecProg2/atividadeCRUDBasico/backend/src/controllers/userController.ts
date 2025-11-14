import {Request, Response} from 'express';
import {pool} from '../models/db';

export const getUsuarios = async (_:Request, res:Response)=>{
  const result = await  pool.query('select * from usuarios order by id');
  res.json(result.rows);
};
export const getUsuarioById = async (req:Request, res:Response)=>{
  const {id} = req.params;
  const result = await  pool.query('select * from usuarios where id = $1',[id]);
  res.json(result.rows[0]);
};
export const createUsuario = async (req:Request, res:Response)=>{
  const {nome, email, telefone} = req.body;
  const result = await  pool.query('insert into usuarios (nome,email,telefone) values ($1,$2,$3) returning *',[nome, email, telefone]);
  res.json(result.rows[0]);
};
export const updateUsuario = async (req:Request, res:Response)=>{
  const {id} = req.params;
  const {nome, email, telefone} = req.body;
  const result = await  pool.query(
    'update usuarios set nome = $1, email = $2, telefone = $3 where id = $4 returning *',[nome, email, telefone,id]);
  res.json(result.rows[0]);
};
export const deleteUsuario = async(req:Request,res:Response)=>{
  const {id} = req.params;
  await pool.query('delete from usuarios where id = $1',[id]);
  res.sendStatus(204);
}