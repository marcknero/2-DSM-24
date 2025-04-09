// Escreva um programa computacional simples que apresente complexidade
// computacional cpubica. Para diferentes tamanhos das entradas, efetue a medição dos tempos
// de execução e crie um gráfico cartesiano que mostre tamanho da entrada x tempo de execução.
// Diga se a curva é coerente com a análise de complexidade do algoritmo.

// para isso vamos supor que tenhamos um cadeado com 3 digitos, cada digito possuindo 10 possibilidades
//se formos calcular a quatidade de combinações possiveis e exibilas em tela, teremos 3 for aninhados
//que iram iterar 10 vezes cada contador gerando uma complexidade de O(10^3) ou O(1000) se considerarmos o numero de possibilidades variaveis como em uma funçao
//teremos uma complexidade exponencial

function calcularCombinacoes(size:number): void {
    console.time('calcularCombinacoes');
    let count:number = 0;
//size correnponte ao numero de possibilidades, considerando 0 a 2 como 3 possibilidades.
    for (let i = 0; i < size; i++) { //iteração do primeiro componente da senha
        for (let j = 0; j < size; j++) { //iteração do segundo componente da senha
            for (let k = 0; k < size; k++) { //iteração do terceiro componente da senha
                count++; //incrementa o contador para cada combinação possivel
                console.log(`(${i}, ${j}, ${k})`); //impressao em tela do conjuntos possiveis, um por vez
            };
        };
    };
    console.log(` tamanho do size: ${size}
        quantas vezes o k foi chamado ${count}`); //chamando a contagem para demonstrar a exponenciação em relação a variavel
    console.timeEnd('calcularCombinacoes');
    };


//precisaremos entao chamar a função com uma opção variavel
calcularCombinacoes(2);
calcularCombinacoes(3);


// considerando linhas 11   - a função define size como parametro e o inicia                    - t0
// considerando linhas 13   - o for atribui i pelo numero de vezes descrito na variavel size    - nt0
// considerando linhas 14   - o for atribui j todas as vezes que o for anterior foi executado   - nt0(nt0)
// considerando linhas 15   - o for atribui k todas as vezes que os dois for anteriores foram executados - nt0(nt0(nt0))
// considerando linhas 16   - saida em tela de cada conjunto possivel, um por vez                - nt0(nt0(nt0))