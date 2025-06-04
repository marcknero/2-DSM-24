class Cliente {
    private constructor(private nome: string, private idade: number) {
    }
    public static criar(nome: string, idade: number): Cliente {
        return new Cliente(nome, idade);
    }
    print() {
        console.log(this.nome, this.idade);
    }
}

let cl = Cliente.criar("Maria",21);
cl.print();