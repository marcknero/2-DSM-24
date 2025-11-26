class Item{
    descricao:string;
    valor:number;
    quantidade:number;

    constructor(descricao:string,valor:number,quantidade:number){
        this.descricao = descricao;
        this.valor = valor;
        this.quantidade = quantidade;
    }
}

class Carrinho {
    itens: Item[] = [];

    adicionarItem(item:Item){
        this.itens.push(item);
    }

    removerItem(descricao:string){
        let index = this.itens.findIndex(i=> i.descricao === descricao);
        if (index !== -1){
            this.itens.splice(index, 1)
        }
    }

    calcularTotal(){
        return this.itens.reduce((total,item)=> total + item.valor, 0)
    }
}

class Pagamento {
    processarPagamento(total:number,forma:string):void {
      //o exercicio solicita o processamento, porem no script de teste ele nao permite o uso do processamento para calcular o total diretamente com 
      // carrinho sendo adicionado entre os parametros.  
        console.log(`Pagamento de ${total} em ${forma},processado com sucesso!`)
    }
}

const carrinhoc = new Carrinho(); 
let item = new Item("Camiseta",50,2); 
carrinhoc.adicionarItem(item); 
item = new Item("Calça",130,1); 
carrinhoc.adicionarItem(item); 
item = new Item("Meia",20,3); 
carrinhoc.adicionarItem(item); 
const total = carrinhoc.calcularTotal();
console.log(total); 
const pagamento = new Pagamento(); 
pagamento.processarPagamento(total,"dinheiro");