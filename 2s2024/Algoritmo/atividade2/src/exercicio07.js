let nros = "19,11,5,10,20"; 
nros = nros.split(","); 
let soma = 0; 
for(let i = 0; i < nros.length; i++ ){ 
  soma = soma+ parseInt(nros[i]); 
} 
console.log("Somatório:", soma);

// este corresponde ao melhor metodo, pois para convertar as strings no arreys depois de divididos
// deveriamos converter item a item, de forma que seria necessário novo for apenas para realizar a conversão