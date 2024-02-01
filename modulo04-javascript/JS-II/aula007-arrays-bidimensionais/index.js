const array = [
  "1º Nível",
  ["2º Nível", "42", "true"],
  [
    ["3º Nível", "1º item", "Olá, Mundo!"],
    ["3º Nível", "2º item", "Oi, Mundo!"],
  ],
  [],
];

console.log(array[0]);
console.log(array[1]);
console.log(array[1][0]);
console.log(array[1][1]);
console.log(array[2]);
console.log(array[2][0]);
console.log(array[2][1][1]);

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];
console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j];
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento);
  }
}
