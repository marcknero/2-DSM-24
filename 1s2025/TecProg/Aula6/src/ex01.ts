function calcular(a: any, b: any): number {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    throw new Error('Os parâmetros precisam ser números');
}

try {
    console.log("Soma:", calcular('oi', 2));
} catch (error) {
    console.log("Erro:", error instanceof Error ? error.message : String(error));
}

try {
    console.log("Soma:", calcular(1, 2));
} catch (error) {
    console.log("Erro:", error instanceof Error ? error.message : String(error));
}

console.log("Fim do programa");