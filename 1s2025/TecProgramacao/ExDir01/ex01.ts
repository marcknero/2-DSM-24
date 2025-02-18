const peso: number = 82;
const altura: number = 1.63;
const imc: number = peso / Math.pow(altura, 2);

if (imc <= 18.5) {
  console.log(`abaixo do peso`);
} else if (imc <= 24.9) {
  console.log(`dentro do peso ideal`);
} else if (imc <= 29.9) {
  console.log("acima do peso ideal");
} else if (imc <= 34.9) {
  console.log("obesidade Grau I");
} else if (imc <= 39.9) {
  console.log("obesidade Grau II");
} else {
  console.log("obesidade Grau III");
}
