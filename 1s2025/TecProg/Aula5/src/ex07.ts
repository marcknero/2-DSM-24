import { Carro } from "./types";

class Uno implements Carro {
    velocidade: number;
    coeficiente: number;
    consumo: number;

    constructor(consumo: number,velocidade: number, coeficiente: number) {
        this.velocidade = velocidade;
        this.coeficiente = coeficiente;
        this.consumo = consumo;
    }

    frenagem(): number {
        const velocidade_ms:number = this.velocidade / 3.6; // Convertendo km/h para m/s
        return (velocidade_ms ** 2) / (2 * 9.806 * this.coeficiente);
    }

    gasto(distancia: number): number {
        return distancia / this.consumo;
    }
}

const uno = new Uno(12.5, 90, 1);
console.log(`Gasto para percorrer 100km: ${uno.gasto(100)} litros`);
console.log(`Distância percorrida ao frear o carro: ${uno.frenagem().toFixed(2)} metros`);
