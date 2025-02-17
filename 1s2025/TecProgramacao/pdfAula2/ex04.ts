class Carro {
  marca: string = "";
  modelo: string = "";
  
  setMarca(marca: string):void {
    this.marca = marca;
  };

  setModelo(modelo: string):void {
    this.modelo = modelo;
  };
  print(): void {
    console.log(`${this.marca} ${this.modelo}`);
  };
}

const car = new Carro();
car.setMarca("VW");
car.setModelo("Paraty");
car.print();