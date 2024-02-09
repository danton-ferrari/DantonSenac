// Exercício 2:
// Crie uma calculadora de área de círculo. Se não sabe o calculo pesquise.

let sim = "s";

while (sim == "s") {
  let raio = Number(prompt("Digite o raio:"));
  var resultado = raio * raio;
  alert((3.14 * resultado).toFixed(2));
}

console.log('Obrigado por usar "Calculadora Danton".');
