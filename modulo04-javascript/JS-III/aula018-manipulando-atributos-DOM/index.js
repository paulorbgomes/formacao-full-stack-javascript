const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Olá, Mundo!";
});

document.getElementById("type").addEventListener("click", function () {
  input.type = input.type !== "radio" ? "radio" : "text";
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digite aqui";
  input.setAttribute("placeholder", "Digite novamente ...");
});

document.getElementById("disable").addEventListener("click", function () {
  input.disabled = !input.disabled;
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log(data);
});
