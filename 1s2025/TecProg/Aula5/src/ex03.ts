import { Poligono } from "./types";

const poligono:Poligono = {
nome: "propriedade",
editavel: false,
pontos: [{x:1, y:2},{x:3, y:4},{x:2,y:5}]
};

console.log(JSON.stringify(poligono, null, 2));