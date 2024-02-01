let pessoa = {
  nome: "Paulo",
  idade: 34,

  metodo1() {
    console.log("Método 1 ...");
  },

  metodo2() {
    console.log("Método 2 ...");
  },

  getNome() {
    return this.nome;
  },

  getIdade() {
    return this.idade;
  },
};

console.log(pessoa);
pessoa.metodo1();
pessoa.metodo2();
console.log(pessoa.getNome());
console.log(pessoa.getIdade());
