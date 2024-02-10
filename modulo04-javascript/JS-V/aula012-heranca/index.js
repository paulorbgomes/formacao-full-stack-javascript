class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

class Apartment extends Property {
  constructor(area, price, number) {
    super(area, price);
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -2);
  }
}

/*
const land = new Property(200, 50000);
const house = new House(120, 200000);

console.log(land);
console.log(house);

console.log(land.getPricePerSquareMeter());
console.log(house.getPricePerSquareMeter().toFixed(2));
*/

const ap = new Apartment(100, 160000, "201");
console.log(ap);
console.log(ap.getFloor());
console.log(ap.getPricePerSquareMeter().toFixed(2));
