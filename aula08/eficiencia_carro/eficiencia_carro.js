var a = "Bom";
var b = "Regular";
var c = "Ruim";
var mensagens = [a, b, c];
var qtde_km = Number(prompt("Quantos Km você andou?"));
var qtde_gasolina = Number(prompt("Quantos litros de gasolina você usou?"));
var metrica = qtde_gasolina / qtde_km;
if (metrica <= 10) {
  alert(mensagens[2]);
} else if (10 > metrica <= 15) {
  alert(mensagens[1]);
} else if (metrica > 15) {
  alert(mensagens[0]);
}
