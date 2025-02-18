class Circulo {
  raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }
  area() {
    let resultado = Math.PI * this.raio ** 2;
    return Math.floor(resultado * 100) / 100;
  }
  perimetro() {
    let resultado = 2 * Math.PI * this.raio;
    return Math.floor(resultado * 100) / 100;
  }
}

const circulo = new Circulo(5);
console.log("Área:", circulo.area());
console.log("Perímetro:", circulo.perimetro());
