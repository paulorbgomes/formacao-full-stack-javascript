const array = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];

console.log(array);
console.log(array.length);

let tamanho = array.push("Boromir");
console.log(array);
console.log(tamanho);

tamanho = array.unshift("Boromir");
console.log(array);
console.log(tamanho);

let elementoRemovido = array.pop();
console.log(elementoRemovido);
console.log(array);
console.log(array.length);

elementoRemovido = array.shift();
console.log(elementoRemovido);
console.log(array);
console.log(array.length);

const inclui = array.includes("Gandalf");
console.log(inclui);

const indice = array.indexOf("Gandalf");
console.log(indice);

const hobbits = array.slice(0, 4);
const outros = array.slice(-4);
console.log(array);
console.log(hobbits);
console.log(outros);

let sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

sociedade.splice(4, 1, "Gandalf, o Cinzento");
console.log(sociedade);

for (let i = 0; i < sociedade.length; i++) {
  console.log(sociedade[i]);
}
