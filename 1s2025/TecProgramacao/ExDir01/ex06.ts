const dia: number = 10;
const mes: number = 5;
const ano: number = 1995;

var nascimento: number = ano * 360 + mes * 30 + dia;
var atual: number = Math.floor(Date.now() / (24 * 60 * 60 * 1000));

console.log(atual);
