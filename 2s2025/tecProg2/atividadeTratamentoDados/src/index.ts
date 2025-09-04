import * as fs from 'fs'
import { parse } from 'csv-parse';


async function lerCSV(caminhoArquivo:string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const registros:string[] = [];

        const leitor = fs.createReadStream(caminhoArquivo)
            .pipe(parse({
                columns: false,
                skip_empty_lines: true,
                delimiter: ',',
            }));

        leitor.on('data', (linha) => {
            if (Array.isArray(linha) && linha.length > 0) {
                registros.push(linha[0]);
            } else if (typeof linha === 'string') {
                registros.push(linha);
            }
        });

        leitor.on('end', () => {
            resolve(registros);
        });

        leitor.on('error', (erro) => {
            reject(erro);
        });
    });
}


// Exemplo de uso:
async function exemploUso() {
    const caminho = './src/nomes.csv'; // Substitua pelo caminho do seu arquivo
    try {
        const dados = await lerCSV(caminho);
        const nomesCapitalizados: string[] = [];
        dados.forEach(nome => {
            let nomec: string = nome.toString();
            nomec = primeiraMaiuscula(nomec);
            nomesCapitalizados.push(nomec);
        });
        // Salva os nomes capitalizados em um novo arquivo CSV
        fs.writeFileSync('./src/nomes_capitalizados.csv', nomesCapitalizados.join('\n'), 'utf8');
        console.log('Arquivo nomes_capitalizados.csv salvo com sucesso!');
    } catch (erro) {
        console.error('Erro ao ler o arquivo:', erro);
    }
}

function primeiraMaiuscula(nome: string): string {
    nome = nome.trim().toLowerCase();
    const prep: string[] = ['de', 'da', 'do', 'das', 'dos', 'e'];
    const nomes: string[] = nome.split(' ');
    for (let i = 0; i < nomes.length; i++) {
        let n = nomes[i];
        if (typeof n ==='string' && !prep.includes(n) && n.length > 0) {
            n = n.substring(0, 1).toUpperCase() + n.substring(1);
        }
        nomes[i] = n ?? " "; // update the array
    }
//debug test
    // let test = nomes.join(' ')
    // console.log(test);
    return nomes.join(' ');
}
exemploUso();