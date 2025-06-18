import { WordFrequency, LegendEntry } from './types';

export function generateGraph(data: WordFrequency[], legend: LegendEntry[]) {
    const maxCount = Math.max(...data.map(d => d.count));
    console.log('\nFrequência das Palavras\n');

    for (let y = maxCount; y >= 1; y--) {
        let line = `${y} |`;
        for (const entry of data) {
            line += entry.count >= y ? '  *' : '   ';
        }
        console.log(line);
    }

    // Eixo X
    let xAxis = '   ';
    for (const entry of data) {
        xAxis += ` ${entry.number} `;
    }
    console.log('   ' + '-'.repeat(data.length * 3));
    console.log(xAxis);

    // Legenda
    console.log('\nLegenda:');
    legend.forEach(entry => {
        console.log(`${entry.number}: ${entry.word}`);
    });
}