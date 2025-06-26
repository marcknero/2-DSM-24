import Geometria from "./types";

class Retangulo implements Geometria {
    constructor(private largura: number, private altura: number) {}

    area(): number {
        return this.largura * this.altura;
    }

    perimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}

class Circulo implements Geometria {
    constructor(private raio: number) {}

    area(): number {
        return Math.PI * this.raio ** 2;
    }

    perimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

let geom: Geometria = new Retangulo(10, 5);
console.log("Área do retângulo:", geom.area());
console.log("Perímetro do retângulo:", geom.perimetro());
geom = new Circulo(5);
console.log("Área do círculo:", geom.area());
console.log("Perímetro do círculo:", geom.perimetro());