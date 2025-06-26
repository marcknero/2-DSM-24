import { Pilha, Ponto } from "./types";

const pilha = new Pilha<Ponto>();
pilha.push({ x: 1, y: 2 });
pilha.push({ x: 2, y: 3 });
pilha.push({ x: 3, y: 4 });
pilha.push({ x: 4, y: 5 });
console.log('Demonstração do objeto pilha: ', pilha);
console.log('Tamanho da pilha: ', pilha['items'].length);
while (pilha['items'].length > 0) {
    console.log(pilha.pop());
}