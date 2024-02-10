class Account {
  #password;
  #balance;

  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
    this.#balance = 0;
  }

  getBalance() {
    return this.#balance;
  }
}

const user = {
  email: "isaac@email.com",
  password: "123456",
};

const myAccount = new Account(user);
console.log(myAccount);
console.log(`Balance: ${myAccount.getBalance()}`);
