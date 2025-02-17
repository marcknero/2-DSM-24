class Retangulo {
    base:number;
    altura:number;

    constructor(base:number,altura:number){
        this.base = base;
        this.altura = altura;
    };
    area():number {
        return this.base*this.altura;
    };
    perimetro(): number {
        return 2*this.base + 2*this.altura;
    };
    print(){
        console.log(`
            Área: ${this.area()}
            Perímetro: ${this.perimetro()} 
            
            `);
    };
};

const a = new Retangulo (2,3);
a.print();