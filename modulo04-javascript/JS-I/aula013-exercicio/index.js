// Exercício 1.1
let primeiroNome = prompt("Primeiro nome:");
let sobrenome = prompt("Sobrenome:");
let campoEstudo = prompt("Campo de estudo:");
let anoNascimento = Number(prompt("Ano de nascimento:"));

let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();
let idade = anoAtual - anoNascimento;

console.log("Nome completo: " + primeiroNome + " " + sobrenome);
console.log("Campo de estudo: " + campoEstudo);
console.log("Idade: " + idade + " anos");

// Exercício 1.2
let valor1 = Number(prompt("Primeiro valor: "));
let valor2 = Number(prompt("Segundo valor: "));

let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;

console.log(
  "Soma: " +
    soma +
    " | Subtração: " +
    subtracao +
    " | Multiplicação: " +
    multiplicacao +
    " | Divisão: " +
    divisao
);
