// Exercício 2.1
const nomeVeiculo1 = prompt("Nome do veículo 1:");
let velocidadeVeiculo1 = prompt("Velocidade do veículo 1:");
velocidadeVeiculo1 = parseFloat(velocidadeVeiculo1);

const nomeVeiculo2 = prompt("Nome do veículo 2:");
let velocidadeVeiculo2 = prompt("Velocidade do veículo 2:");
velocidadeVeiculo2 = parseFloat(velocidadeVeiculo2);

if (velocidadeVeiculo1 > velocidadeVeiculo2) {
  alert(
    "A velocidade de " +
      nomeVeiculo1 +
      " é maior que a velocidade de " +
      nomeVeiculo2
  );
} else if (velocidadeVeiculo2 > velocidadeVeiculo1) {
  alert(
    "A velocidade de " +
      nomeVeiculo2 +
      " é maior que a velocidade de " +
      nomeVeiculo1
  );
} else {
  alert(
    "As velocidades dos veículos " +
      nomeVeiculo1 +
      " e " +
      nomeVeiculo2 +
      " são iguais"
  );
}
