import { Carro2 } from "../exercicio04/ex04";

let carros = [];
let carro = new Carro2("VW","Gol");
carros.push(carro);
carro = new Carro2("Fiat","Uno");
carros.push(carro);
carro = new Carro2("GM","Corsa");
carros.push(carro);

console.log(`
    ${carros[0].marca} ${carros[0].modelo}
    ${carros[1].marca} ${carros[1].modelo}
    ${carros[2].marca} ${carros[2].modelo}
    `);