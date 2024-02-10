class Wallet {
  #amount;
  #userName;

  constructor() {
    this.#amount = 100.99 * 100;
  }

  get amount() {
    return this.#amount / 100;
  }

  set userName(newUserName) {
    this.#userName = newUserName;
  }

  get userName() {
    return this.#userName;
  }
}

const myWallet = new Wallet();
console.log(myWallet.amount);
