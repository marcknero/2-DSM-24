import * as fs from "fs";

function stem(palavra: string): string {
    // Lista simplificada de sufixos organizados em grupos
    const sufixos = ['mente', 'ção', 'ções', 'idade', 'ível', 'ável', 'ismo', 'ista', 'oso', 'osa'];
    const tamanhoMinimo = 3; // Tamanho mínimo da raiz da palavra

    // Verificar e remover sufixos
    for (const sufixo of sufixos) {
        if (palavra.endsWith(sufixo)) {
            const raiz = palavra.slice(0, -sufixo.length);
            if (raiz.length >= tamanhoMinimo) {
                return raiz; // Retornar a raiz se for válida
            }
        }
    }

    // Retornar palavra original se nenhum sufixo for removido
    return palavra;
}

function processarTextoRSLP(texto: string): string {
    const palavras = texto.split(' ');
    const palavrasStemizadas = palavras.map(stem);
    return palavrasStemizadas.join(' ');
}

// Função principal para processar o arquivo
function processarArquivo(inputFilePath: string): void {
    const outputFilePath = inputFilePath.replace('.txt', '_out.txt');

    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }

        // Processar o texto lido
        const textoProcessado = processarTextoRSLP(data);

        // Salvar o texto processado em um novo arquivo
        fs.writeFile(outputFilePath, textoProcessado, 'utf8', (err) => {
            if (err) {
                console.error('Erro ao salvar o arquivo:', err);
                return;
            }
            console.log(`Arquivo processado com sucesso. Resultado salvo em: ${outputFilePath}`);
        });
    });
}

// Exemplo de uso
const caminhoArquivo = 'C:/Users/marck/Desktop/teste.txt';
processarArquivo(caminhoArquivo);