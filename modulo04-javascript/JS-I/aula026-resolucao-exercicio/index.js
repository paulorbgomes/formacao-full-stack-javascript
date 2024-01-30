// Exercício 4
const nome = prompt("Digite o seu nome: ");
let contador = 0;
let cidades = "";

while (true) {
  let resposta = prompt(
    "Você já visitou alguma cidade? (sim/não)"
  ).toLocaleLowerCase();
  if (resposta === "sim") {
    let respostaCidade = prompt("Qual cidade você visitou?");
    cidades += " " + respostaCidade;
    contador++;
  } else if (resposta === "não") {
    break;
  }
}

alert("O turista " + nome + " visitou " + contador + " cidades!\n" + cidades);
