class Agenda {
    contatos:Contato[]=[];

    adicionarContato(contato:Contato){
        this.contatos.push(contato)
    }

    removerContato(contato:Contato){
        let index = this.contatos.indexOf(contato);
        if(index !== -1){
            this.contatos.splice(index,1)
        }
    }
}

class Contato {
    nome:string;
    telefone:string;
    email:string;

    constructor(nome:string,telefone:string,email:string){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

let fernando = new Contato('Fernando Manfio','12987658765','fermanfio@gmail.com')
let agenda = new Agenda();
agenda.adicionarContato(fernando);
let paulo = new Contato('Paulo Manfio','12987658765','paulomanfio@gmail.com')
agenda.adicionarContato(paulo);
let botelho = new Contato('Botelho Manfio','12987658765','botmanfio@gmail.com')
agenda.adicionarContato(botelho);
console.log(agenda)
agenda.removerContato(fernando)
console.log(agenda)

//seguindo o padrão indicado no pdf, foi atibruido nomes(chave) para cada contato