const book = {
  title: "Eragon",
  pages: 468,
  published: true,
  inStock: 20,
  tags: ["fantasy", "adventure", "medieval"],
  author: {
    name: "Christopher Paolini",
  },

  addOnStock(quantity) {
    this.inStock = this.inStock + quantity;
  },

  save: function () {
    // Salva no banco de dados ...
  },
};

console.log(book);
book.addOnStock(50);
console.log(book.inStock);
