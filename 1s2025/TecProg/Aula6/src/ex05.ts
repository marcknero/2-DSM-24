class Pilha<T> {
    private items: T[] = [];
    push(item: T): void {
        if (this.items.length == 5) {
            throw new Error("Pilha cheia");
        }
        this.items.push(item);
    }
    pop(): T {
        const item = this.items.pop();
        if (item === undefined) {
            throw Error("Pilha vazia");
        }
        return item;
    }
}

const nomes = ["Ana", "Pedro", "Luiz", "Maria", "Inês", "José"];
const pilha = new Pilha<string>();
for (let i = 0; i < nomes.length; i++) {
    try {
        pilha.push(nomes[i]);
        console.log(`Empilhado: ${nomes[i]}`);
    } catch (error) {
        console.log("Erro ao empilhar:", error instanceof Error ? error.message : String(error));
        console.log(`Não foi possível empilhar: ${nomes[i]}`);
    }
}

// Desempilhar todos os itens
while (true) {
    try {
        const item = pilha.pop();
        console.log(`Desempilhado: ${item}`);
    } catch (error) {
        console.log("Erro ao desempilhar:", error instanceof Error ? error.message : String(error));
        break;
    }
}
console.log("Fim do programa");
