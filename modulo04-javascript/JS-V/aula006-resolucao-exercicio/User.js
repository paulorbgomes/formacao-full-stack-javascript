class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  // Métodos Pesonalizados
  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login bem sucedido!");
    } else {
      console.error("ERRO! Por favor, verifique seu login e senha!");
    }
  }
}

const user = new User("Paulo R. B. Gomes", "paulo@email", "12345");
user.login("paulo@email", "12345");
user.login("paulo@", "12345");
user.login("paulo@email", "123");
