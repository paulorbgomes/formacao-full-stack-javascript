// Funçoes
const soma = (a, b) => {
  return a + b;
};

const subtracao = (a, b) => {
  return a - b;
};

const multiplicacao = (a, b) => {
  return a * b;
};

const divisao = (a, b) => {
  return a / b;
};

const x = Number(prompt("Primeiro valor: "));
const y = Number(prompt("Segundo valor: "));

console.log(soma(x, y));
console.log(subtracao(x, y));
console.log(multiplicacao(x, y));
console.log(divisao(x, y));
