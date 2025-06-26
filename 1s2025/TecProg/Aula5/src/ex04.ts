
import { Livro } from "./types";

class Revista extends Livro {
    constructor(titulo: string, ano: number, private edicao: number) {
        super(titulo, ano);
    }

    print(): void {
        console.log(`Título: ${this.titulo}, Ano: ${this.ano}, Edição: ${this.edicao}`);
    }
}


const revista = new Revista("Revista de Tecnologia", 2023, 10.2);
revista.print();