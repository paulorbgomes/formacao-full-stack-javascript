const Address = require("./Address.js");
const Person = require("./Person.js");

const addr = new Address("7 de Setembro", 99, "Centro", "São Fidelis", "RJ");
const joe = new Person("Joe H.", addr);

console.log(joe);
console.log(joe.address.fullAddress());
