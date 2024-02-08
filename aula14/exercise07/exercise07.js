// Esse é um conversor de temperaturas, pega fahrenheit e
// transforma em célsius e pega de celsius e transforma para
// fahrenheit.
// O correto seria que ao escrever 100 e selecionar como Céucius,
// digitando C, ele te retornasse que a temperatura em fahrenheit é
// 212.00ºF, e ao digitar 100 para F ele te retornasse 37.78°C
// Mas aparentemente o programador se confundiu e ele está dando
// errado as conversões, né garantimos que os cálculos estão certos,
// mas algo na ordem deles não parece muito certa

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function fahrenheitParaCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
let temperatura = parseFloat(
  prompt("Digite a temperatura (em Celsius ou Fahrenheit):")
);
let escala = prompt(
  "Digite a escala da temperatura (C para Celsius, F para Fahrenheit):"
).toUpperCase();
if (escala == "C") {
  alert(
    "A temperatura em Fahrenheit é: " +
      fahrenheitParaCelsius(temperatura).toFixed(2) +
      "°F"
  );
} else if (escala == "F") {
  alert(
    "A temperatura em Celsius é: " +
      celsiusParaFahrenheit(temperatura).toFixed(2) +
      "°C"
  );
} else {
  alert("Escala inválida.");
}
