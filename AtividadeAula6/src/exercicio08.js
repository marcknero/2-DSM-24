function matriz(num){
    i=0;
    som=0;
    while (i<num.length){
        j=0;
        while (j<num[i].length){
            som=som+num[i][j];
            j=j+1;
        };
        i=i+1;
    };
    return som; 
};
numeros=[
    [9,2,4],
    [6,5,7],
    [2,1,3]
];
numeros2=[
    [5,8,3,4],
    [9,7,2]
]
s=matriz(numeros);
console.log('somatorio dos elementos é:',s);
s=matriz(numeros2);
console.log('\nsomatorio dos elementos é:',s);