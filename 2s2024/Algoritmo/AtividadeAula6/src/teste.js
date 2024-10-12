// Funções
function msg() {
    console.log("tá aí, vamos testar como criar funções");
};
function saudacao(nome) {
    console.log("Olá, ", nome);
};
function classific(nome, idade){
    if (idade<18){
        console.log(nome, " é menor de idade");
    } else {
        console.log(nome, " é maior de idade");
    };
};


resp=prompt('digite S para exibir a mensagem guardada ou N para sair da execução');
if(resp == 's' || resp == 'S') {
    msg();
};
x = prompt('digite seu nome:');
//saudacao(nome);
//saudacao('Ana');
// utilizando a função apenas definindo o valor desejado no termo entre parentese, fazendo com que ele assuma o valor da variavel.
y = prompt('digite sua idade: ');
classific(x,y);

/*fuções com dois parametros e retorno, isso indica que a função vai gerar um retorno,
como no exemplo vamos usar um retorno calculavel. para guardar o valor de retorno devemos sempre manter em mente
que o return deve ser guardado em uma variavel*/
function somar(n1,n2){
    return n1+n2;
};
function multiplicar(n1,n2){
    return n1*n2;
}
s= somar(4,5);
m = multiplicar(4,5);
console.log('soma = ',s,' multiplicação=',m);