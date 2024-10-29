function criar(a,b){ 
    let v = []; //cria um array vazio 
    for( let i = 0; a <= b; i++, a++ ){ 
      v[i] = ""+a; 
    } 
    return v; 
  }
  let r = criar(5,10); 
console.log("Array:", r);