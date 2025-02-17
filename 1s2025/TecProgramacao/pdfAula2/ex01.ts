class film {
    titulo:string;
    duracao:number;
    constructor(titulo:string,duracao:number){
        this.titulo = titulo;
        this.duracao = duracao;
    };
    print(){
        console.log(`O filme ${this.titulo} possui ${this.duracao} minutos de duração`)
    };
};

const dvpf = new film("De Volta para o Futuro",116);
const matrix = new film("Matrix",136);

dvpf.print();
matrix.print();