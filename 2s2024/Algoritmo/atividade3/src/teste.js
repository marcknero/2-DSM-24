function imprimir(a,b){ 
    if( b < a ){ 
      let temp = a; 
      a=b; 
      b=temp; 
    }
    let resultado = "";
    for(; a <= b; a++){ 
      resultado += a + " "; 
    } 
    console.log(resultado.trim())
    } 
    
    imprimir(5,10); 
    imprimir(19,15);