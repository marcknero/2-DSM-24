function longo(a,b){ 
  if( a.length>b.length ){ 
    return r=a; 
  } 
  else{ 
    return r=b; 
  } 
} 
 
let r = longo("Ana","Maria"); 
console.log("Nome mais longo:", r); 
r = longo("Antonio","Pedro"); 
console.log("Nome mais longo:", r); 