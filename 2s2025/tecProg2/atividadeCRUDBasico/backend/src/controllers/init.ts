import {query, ensureDatabase} from "../models/db";

ensureDatabase();
async function init() {
  return await query(`
    drop database if exists usuarios;
    create database usuarios;
    START TRANSACTION;
    DROP TABLE IF EXISTS usuarios;
    CREATE TABLE IF NOT EXISTS usuarios(
    id serial primary key,
    nome varchar(100) not null,
    email varchar(100) not null,
    telefone varchar(20) not null,
    data_criacao timestamp not null default current_timestamp
    );
    commit;
    `);  
}
init().then((r)=>console.log(r)).catch((e)=>console.log(e));
