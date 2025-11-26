class CarrinhoDeCompras {
    itens: string[] = [];

    adicionarItem(item:string){
        this.itens.push(item);
    }

    removerItem(item:string){
        let index = this.itens.indexOf(item);
        if (index !== -1){
            this.itens.splice(index, 1)
        }
    }

    imprimir(){
        console.log(this.itens)
    }
}

const carrinho = new CarrinhoDeCompras();
carrinho.adicionarItem('Camiseta')
carrinho.adicionarItem('Calça')
carrinho.adicionarItem('Meia')
carrinho.imprimir();
carrinho.removerItem('Camiseta')
carrinho.imprimir();

//corrigido o metodo imprimir, no pdf, chama dentro do console, neste caso o metodo ja usa o console.log
