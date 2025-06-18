import * as fs from 'fs';
import { processText } from './textProcessor';
import { generateGraph } from './graph';

const filePath = process.argv[2]; // Caminho do arquivo passado como argumento

if (!filePath) {
    console.error('Por favor, forneça o caminho do arquivo .txt como argumento.');
    process.exit(1);
}

const text = fs.readFileSync(filePath, 'utf-8');
const wordFrequencies = processText(text);

// Gerar array de palavras e atribuir números
const words = Object.keys(wordFrequencies);
const legend = words.map((word, idx) => ({ number: idx + 1, word }));

// Montar array para o gráfico
const wordFrequenciesArray = words.map((word, idx) => ({
    number: idx + 1,
    count: wordFrequencies[word]
}));

generateGraph(wordFrequenciesArray, legend);