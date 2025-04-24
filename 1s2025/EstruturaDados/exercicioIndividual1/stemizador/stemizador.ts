import * as fs from "fs";

function stem(word: string, rootSize?: number): string {
    // Lista de sufixos mais comumente usados, com menor impacto no arquivo quando removidos.
    const sufixos = ['al', 'ível', 'oso', 'ento', 'ista', 'mente','ar', 'er', 'ir', 'ção', 'são', 'eira', 'eiro', 'ura', 'ismo', 'ável', 'zinha', 'zinho', 'ada','ado', 'ido', 'oso', 'osa','amos','emos','antes','entes','mentes'];

    // Verificar e remover sufixos
    if (rootSize) {
        const raiz = word.slice(0, rootSize);
        return raiz; // Retornar a raiz se for válida
    } else {
        for (const sufixo of sufixos) {
            if (word.endsWith(sufixo)) { // Verificar se a palavra termina com o sufixo
                if (word.slice(0, -sufixo.length).length>=4){
                return word.slice(0, -sufixo.length); // Remover o sufixo
                }
            }
        }
    }

    // Retornar a palavra original se nenhum sufixo for removido
    return word;
}

function textProcessor(texto: string, rootSize?: number): string {
    const words = texto.split(/\s+/);
    const wordsStemmed = words.map(word=>stem(word,rootSize));
    return wordsStemmed.join(' ');
}

// Função principal para processar o arquivo
function archiveProcessor(inputFilePath: string, rootSize?: number): void {
    const outputFilePath = inputFilePath.replace('.txt', '_out.txt');

    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }

        // Processar o texto lido
        const textoProcessado = textProcessor(data,rootSize);

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
let caminhoArquivo:string = 'C:/Users/marck/Desktop/teste.txt';
archiveProcessor(caminhoArquivo);
caminhoArquivo = 'C:/Users/marck/Desktop/teste2.txt';
archiveProcessor(caminhoArquivo,3);