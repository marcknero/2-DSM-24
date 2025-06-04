class Matematica {
constructor(private a: number, private b: number) {
}
protected somar() {
console.log("Soma:", this.a + this.b);
}
protected subtrair() {
console.log("Diferença:", this.a - this.b);
}
}
class Calcular extends Matematica {
constructor(a:number,b:number){
    super(a,b);
}
somar(){
    super.somar();
}
subtrair(){
    super.subtrair();
}
}
const calc = new Calcular(5,3);
calc.somar();
calc.subtrair();
