class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  // Métodos Personalizados
  addToStock(qtde) {
    this.inStock = this.inStock + qtde;
  }

  calculateDiscount(per) {
    return this.price - (this.price * per) / 100;
  }
}

const product = new Product("Produto1", "Descrição ...", 100);
product.addToStock(500);
console.log(product.inStock);
console.log(
  `Valor com desconto: R$ ${product.calculateDiscount(10).toFixed(2)}`
);
