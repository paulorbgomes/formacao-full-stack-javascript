const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

/*
// .map
const personagensNomes01 = [];
for (let i = 0; i < personagens.length; i++) {
  personagensNomes01.push(personagens[i].nome);
}
console.log(personagensNomes01);

const personagensNomes02 = personagens.map(function (personagem) {
  return personagem.nome;
});
console.log(personagensNomes02);
*/

// filter
const orcs = [];
for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orc") {
    orcs.push(personagens[i].nome);
  }
}
console.log(orcs);

const orcsFilter = personagens.filter(function (personagem) {
  return personagem.raca === "Orc";
});
console.log(orcsFilter);
