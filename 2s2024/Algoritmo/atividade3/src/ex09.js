function fatorial (nro){ 
    let total = 1; 
    for(let i = 1; i <= nro; i++){ 
      total = total * i; 
    } 
    return total; 
  }
  let r = fatorial(5); 
console.log("Fatorial:", r); 
r = fatorial(2); 
console.log("Fatorial:", r); 
r = fatorial(1); 
console.log("Fatorial:", r); 
r = fatorial(0); 
console.log("Fatorial:", r);
/*para multiplicação, sempre iniciar em 1, assim como 0
é neutro para soma e subtração, para multiplicação o neutro seria 1*/