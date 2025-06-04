class Geometria {
    static _count:number = 0;
    constructor(){
        Geometria._count++
    }

    area(): number {
        return 0;
    }
    quantidade():void{
        console.log("Quantidade de geometrias: ",Geometria._count)
    }
}
class Retangulo extends Geometria {
    constructor(private base: number, private altura: number) {
        super();
    }
    area(): number {
        return this.base * this.altura;
    }
}
class Circulo extends Geometria {
    constructor(private raio: number) {
        super();
    }
    area(): number {
        return Math.PI * this.raio ** 2;
    }
}
let geom: Geometria = new Retangulo(10, 5);
console.log("Retângulo:", geom.area());
geom = new Circulo(5);
console.log("Círculo:", geom.area());
geom.quantidade();
