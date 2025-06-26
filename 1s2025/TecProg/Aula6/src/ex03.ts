class AleatorioError extends Error {
    constructor(message: string, public nro: number) {
        super(message);
    }
}
function aleatorio(): number {
    const nro = Math.floor(Math.random() * 10);
    if (nro % 2 === 0) {
        return nro;
    }
    throw new AleatorioError("Número ímpar", nro);
}
function arrayAleatorio(quantidade: number): number[] {
    const array: number[] = [];
    for (let i = 0; i < quantidade; i++) {
        try {
            array.push(aleatorio());
        } catch (error) {
            if (error instanceof AleatorioError) {
                // Multiplica o número ímpar por 10 e adiciona ao array
                array.push(error.nro * 10);
            } else {
                throw error; // Re-lança outros tipos de erro
            }
        }
    }
    return array;
}
const vetorAleatorio = arrayAleatorio(8);
console.log("Array:", vetorAleatorio);
console.log("Fim do programa");