const eleitores: number = 1000;
const validos: number = 600;
const nulos: number = 100;
const brancos: number = 150;

console.log(`
  Total de elitores do municipio de Lothlorien: ${eleitores};

  Percentual de votos válidos: ${Math.floor(validos / eleitores * 100)}%,
  Percentual de votos brancos: ${Math.floor(brancos / eleitores * 100)}%,
  Percentual de votos nulos: ${Math.floor(nulos / eleitores * 100)}%,
  `);