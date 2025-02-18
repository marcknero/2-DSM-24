const salario_atual:number = 1512;
const percentual_aumento:number = 12;

console.log(`
  Salario atual: ${salario_atual}
  Percentual de reajuste aplicado: ${percentual_aumento}%
  Novo salário: ${salario_atual*(1+(percentual_aumento/100))}
  `);

  /* para melhorar a entrega, pode-se adicionar o Math.florr, aplicando ao resultado final
  evitando qualquer coisa depois da segunda casa decima, para isso, multilicaria o resultado interno
  por 100 para depois de aplicado o math.floor, divir novamente por 100.*/