class Vehicle {
  move() {
    console.log("O veículo está se movendo ...");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro está se movendo ...");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O navio está se movendo ...");
  }
}

class Plane extends Vehicle {
  move() {
    console.log("O avião está se movendo ...");
  }
}

const veiculo = new Vehicle();
veiculo.move();

const carro = new Car();
carro.move();

const navio = new Ship();
navio.move();

const aviao = new Plane();
aviao.move();
