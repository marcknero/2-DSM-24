import Point from "./ex07";

class Rectangle {
  inferiorEsquerdo: Point;
  superiorDireito: Point;

  constructor(ie: Point, sd: Point) {
    this.inferiorEsquerdo = ie;
    this.superiorDireito = sd;
  };

  area(): number {
    const infDir = new Point(this.superiorDireito.x, this.inferiorEsquerdo.y);
    const base = this.inferiorEsquerdo.distancia(infDir);
    const altura = this.superiorDireito.distancia(infDir);
    return base * altura;
  };
}

const sd = new Point(3, 5);
const ie = new Point(1, 2);
const r = new Rectangle(ie, sd);
console.log(`A área do retangulo formado é: ${r.area()}`);
