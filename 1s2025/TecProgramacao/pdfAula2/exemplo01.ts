class Pessoa {
    nome:string;
    idade:number;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
    
    imprimir (msg:string) {
        console.log(`${this.nome} possui ${this.idade} anos ${msg}`)
    }
}

const x = new Pessoa("Ana",18);
const y = new Pessoa("Pedro",20);
x.imprimir("um monte de bugs");
y.imprimir("testando divertido");