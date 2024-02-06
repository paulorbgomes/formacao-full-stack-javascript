/*
function render() {
  console.log("Renderizando a interface da aplicação ...");
}

function store() {
  console.log("Salvando as informações no banco de dados ...");
}
*/

const render = require("./render.js");
const store = require("./store.js");

console.log("Aplicação iniciada ...");
render();
store();
console.log("Aplicação finalizada ...");
