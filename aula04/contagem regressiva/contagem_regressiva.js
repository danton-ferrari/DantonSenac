let sim = true;
while (sim) {
  var numero = Number(prompt("Digite um número:"));
  if (numero <= 0) {
    console.log("Você escreveu um número inválido");
    break;
  }
  for (var i = numero; i > 0; i--) {
    console.log(i);
  }
  sim = prompt("Deseja continuar? (s/n)");
  if (sim != "s") {
    sim = false;
  }
}
