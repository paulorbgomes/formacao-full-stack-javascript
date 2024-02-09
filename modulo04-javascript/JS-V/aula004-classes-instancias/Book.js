class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
    this.published = false;
  }

  // Métodos Personalizados
  publish() {
    this.published = true;
  }
}

const eragon = new Book("Eragon", 468);
console.log(eragon);
eragon.publish();
console.log(eragon);
