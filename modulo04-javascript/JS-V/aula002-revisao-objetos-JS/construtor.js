function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;

  this.addOnStock = function (quantity) {
    this.inStock = this.inStock + quantity;
  };
  this.save = function () {
    // Salva no banco de dados
  };
}

const title = "Eragon";
const pages = 468;
const tags = ["fantasy", "adventure", "medieval"];
const author = {
  name: "Christopher Paolini",
};

const eragon = new Book(title, pages, tags, author);
console.log(typeof eragon);
console.log(eragon);
