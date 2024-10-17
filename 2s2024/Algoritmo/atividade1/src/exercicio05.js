// MOSTRANDO SOMENTE OS NUMEROS PARES dentro dos numeros sorteados com random()
let i = 0;
while( i<6 ){ 
  nro = Math.random();
  nro = nro*100;
  nro = Math.floor(nro);
  if (nro %2 == 0) {
      console.log(nro);       
  }
  i = i+1; 
}

// forçando o sistema a me entregar 6 numeros pares gerados randomicamente
// exercicio 06 executado sem querer durante o erro de excução do exercicio 5
let i = 0;
while( i<6 ){ 
  nro = Math.random();
  nro = nro*100;
  nro = Math.floor(nro);
  if (nro %2 == 0) {
      console.log(nro);       
      i = i+1; 
    }  
}