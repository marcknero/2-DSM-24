import { Pool } from "pg";
import { Client } from "pg";


export async function ensureDatabase() {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "postgres", // conecta ao banco padrão
    password: "123",
    port: 5432,
  });

  await client.connect();

  const res = await client.query(
    "SELECT 1 FROM pg_database WHERE datname = 'usuarios';"
  );

  if (res.rowCount === 0) {
    await client.query("CREATE DATABASE usuarios;");
    console.log("Banco 'usuarios' criado com sucesso!");
  } else {
    console.log("Banco 'usuarios' já existe, não foi recriado.");
  }

  await client.end();
}


export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'usuarios',
  password: '123',
  port:5432
});

export async function query(sql:string,params?:any[]) {
  try{
    const res = await pool.query(sql,params);
    if (res.command == 'INSERT'){
      return res.rows[0];
    } else if (res.command == 'SELECT'){
      return res.rows;
    } else if (res.command == 'DELETE' || res.command == 'UPDATE'){
      return {rowcount: res.rowCount};
    } else {
      return {sql};
    }
  } catch (e:any) {
    return {message: e.message};
  }
};