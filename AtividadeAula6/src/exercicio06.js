function somatorio(arr){
    i=0;
    som=0;
    while (i<arr.length){
        som = som+arr[i];
        i=i+1;
    };
    return som;
};
numeros=[8,3,4,7,5];
s = somatorio(numeros);
console.log('a soma dos componentes é:',s);