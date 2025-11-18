class ContaBancaria {
  saldo: number = 0;
  // constructor(saldo:number){
  //   this.saldo = saldo;
  // }
  depositar(v:number){
    this.saldo =+ v;
  }
  sacar(v:number){
    if (v <= this.saldo){
      this.saldo = this.saldo - v;
    } else {
      console.log('Saldo insuficiente')
    }
  }
}

class Cliente{
  nome: string;
  cpf:string;
  nasc:Date;
  nomeMae:string;
  conta:ContaBancaria;

  constructor(nome:string,cpf:string, nasc:Date,nomeMae:string,conta:ContaBancaria){
    this.nome = nome;
    this.cpf = cpf;
    this.nasc = nasc;
    this.nomeMae = nomeMae;
    this.conta = conta;
  }

}

let conta1 = new ContaBancaria;
let cliente1 = new Cliente('Andreibe','12345678901',new Date('2001-12-25'),'Adriana',conta1);

console.log('saldo',cliente1.conta.saldo)
cliente1.conta.depositar(100)
console.log('saldo',cliente1.conta.saldo)
cliente1.conta.sacar(50)
console.log('saldo',cliente1.conta.saldo)
cliente1.conta.sacar(60)
console.log('saldo',cliente1.conta.saldo)