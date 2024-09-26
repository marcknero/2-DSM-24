function inverte(nome){
    i=nome.length-1;
    inv='';
    while (i>=0){
        inv=inv+nome[i];
        i=i-1;
        };
    return inv;
};
r=inverte("Pedro");
console.log("Invertido é:",r);
/* podemos utilizar o while da seguinte forma
apenas utilizando o a soma de forma invertida
co i = 0 
while (i<nome.length-1){
    inv = nome[i] + inv;
    i=i+1;
    }
    return inv */