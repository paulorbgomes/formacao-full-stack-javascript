class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  // Atributo estático
  static baseFee = 150;

  // Métodos estáticos
  static showBaseFee() {
    console.log(`Base fee is: ${Reservation.baseFee}`);
  }
}

console.log(Reservation.baseFee);
Reservation.showBaseFee();
