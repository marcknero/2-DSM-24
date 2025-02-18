class Ponto {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distancia(referencia: Ponto): number {
    return Math.sqrt(
      (referencia.x - this.x) ** 2 + (referencia.y - this.y) ** 2
    );
  }
}

const a = new Ponto(3, 5);
const b = new Ponto(1, 2);

console.log("Distancia: ", a.distancia(b));

export default Ponto;