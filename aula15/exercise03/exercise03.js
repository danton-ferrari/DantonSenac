// Exercício 3:
// Crie uma calculadora de área do cilindro, e pergunte para o usuário se ele quer calcular
// área do círculo ou do cilindro.

var continuar = true;
while (continuar) {
  var opcao = Number(
    prompt("Digite qual áre quer calcular:\n1 -> Circulo\n2 -> Cilindro")
  );
  switch (opcao) {
    case 1:
      var raio = Number(prompt("Digite o raio:"));
      var resultado = raio * raio;
      alert((3.14 * resultado).toFixed(2));
      break;
    case 2:
      var raio = Number(prompt("Digite o raio:"));
      var h = Number(prompt("Digite a altura:"));
      var resultado = 2 * 3.14 * raio * (raio + h);
      alert(resultado.toFixed(2));
      break;
  }
  continuar =
    prompt('Digite "c" para continuar ou "s" para sair:').toLocaleLowerCase() ==
    "c"
      ? true
      : false;
}

alert('Obrigado por usar "Calculadora Danton".');
