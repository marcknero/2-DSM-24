function aleatorio(): number {
    const nro = Math.floor(Math.random() * 10);
    if (nro % 2 === 0) {
        return nro;
    }
    throw new Error("Número ímpar");
}
function arrayAleatorio(quantidade: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < quantidade; i++) {
        let numeroAdicionado = false;
        while (!numeroAdicionado) {
            try {
                array.push(aleatorio());
                numeroAdicionado = true;
            } catch (error) {
                // Continue tentando até conseguir um número par
            }
        }
    }
    return array;
}
const vet = arrayAleatorio(8);
console.log("Array:", vet);
console.log("Fim do programa");