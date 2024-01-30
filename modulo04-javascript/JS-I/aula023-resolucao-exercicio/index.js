let medidaMetros = prompt("Medida em metros (m): ");
medidaMetros = parseFloat(medidaMetros);

let conversao = null;

const opcao = prompt(
  "Opções para conversão: \n\n" +
    "1. milímetro (mm) \n" +
    "2. centímetro (cm) \n" +
    "3. decímetro (dm) \n" +
    "4. decâmetro (dam) \n" +
    "5. hectômetro (hm) \n" +
    "6. quilômetro (km) \n"
);

switch (opcao) {
  case "1":
    conversao = medidaMetros * 1000;
    alert("Conversão: " + medidaMetros + " (m) vale " + conversao + " (mm)");
    break;
  case "2":
    conversao = medidaMetros * 100;
    alert("Conversão: " + medidaMetros + " (m) vale " + conversao + " (cm)");
    break;
  case "3":
    conversao = medidaMetros * 10;
    alert("Conversão: " + medidaMetros + " (m) vale " + conversao + " (dm)");
    break;
  case "4":
    conversao = medidaMetros / 10;
    alert("Conversão: " + medidaMetros + " (m) vale " + conversao + " (dam)");
    break;
  case "5":
    conversao = medidaMetros / 100;
    alert("Conversão: " + medidaMetros + " (m) vale " + conversao + " (hm)");
    break;
  case "6":
    conversao = medidaMetros / 1000;
    alert("Conversão: " + medidaMetros + " (m) vale " + conversao + " (km)");
    break;
  default:
    alert("Opção Inválida!");
}
