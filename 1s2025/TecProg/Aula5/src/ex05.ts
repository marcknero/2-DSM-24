// export class Pilha<T> {
//     private items: T[] = [];
//     push(item: T): void {
//         this.items.push(item);
//     }
//     pop(): T | undefined {
//         return this.items.pop();
//     }
// }

import { Pilha } from "./types";

const pilha = new Pilha<string>();
pilha.push("Ana");
pilha.push("Pedro");
pilha.push("Luiz");
pilha.push("Maria");
console.log('Demonstração do objeto pilha: ',pilha);
console.log('Tamanho da pilha: ', pilha['items'].length);
while (pilha['items'].length > 0) {
    console.log(pilha.pop());
}
console.log('Demonstração do objeto pilha: ',pilha);
console.log('Tamanho da pilha: ', pilha['items'].length);