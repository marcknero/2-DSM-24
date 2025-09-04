class Pessoa {
    nome: string;
    email: string;
    nasc:string;

    constructor(nome: string, email: string,nasc:string) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }

    imprimir() {
        console.log(
            `nome: ${this.nome}
email: ${this.email}
nascimento: ${this.nasc}
idade: ${this.idade(this.nasc)}
anos Bissextos: ${this.contBisex()}`)
    }

    //calculete the age using the data of birth informed
    idade(nasc:any):number {
        const hoje = new Date();
        const ano:number = parseInt(nasc.substring(6,10));
        const mes:number = parseInt(nasc.substring(3,5));
        const dia:number = parseInt(nasc.substring(0,2));
        const datan = new Date(ano,mes,dia);

        let idade:number = hoje.getFullYear() - datan.getFullYear();
        
        const m:number = hoje.getMonth() - datan.getMonth();

        if (m<0 || m===0 && hoje.getDate()<datan.getDate()){
            idade--;
        }

        return idade;
    }

    //count the ocurrencies of bissexts years between the year of birth and he actual year
    contBisex(){
        const ano:number = parseInt(this.nasc.substring(6,10));
        const hoje = new Date();
        const anoAtual = hoje.getFullYear();
        let quant:number = 0;

        for (let x= ano; x<=anoAtual; x++){
            if (DataUtil.isBissexto(x)){
                // console.log(x);
                quant++;

            }
        }
        return quant;
    }
}

class DataUtil {
    static isBissexto(ano:number){
        if (ano % 400 === 0 ){
            return true;
        } else if (ano % 4 === 0 && ano % 100 != 0 ){
            return true;
        } else {
            return false;
        }
    }

    
}

const cliente = new Pessoa("Marcos Vinícius", "marck.nero@gmail.com","13/11/1992");
// console.log(cliente.nome);
// console.log(cliente.email);

cliente.imprimir()