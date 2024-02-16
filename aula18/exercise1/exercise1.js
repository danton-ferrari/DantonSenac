// Exercício 1:
// Monte 3 códigos que irão gerar falhas e faça o try-catch pegar elas.
// Quando você deseja criar um tipo de erro novo, podemos usar o seguinte comando
// throw new Error(“Mensagem que deve aparecer”)
function calcular_operacao(operacao, a, b) {
  switch (operacao) {
    case 1:
      return a * b;
    case 2:
      return a / b;
    case 3:
      return a + b;
    case 4:
      return a - b;
    case 5:
      return a ** b;
    default:
      throw new Error("Você digitou algo inválido!");
  }
}
try {
  var operacao = Number(
    prompt(
      "Digite a operação que deseja:\n1 -> *\n2 -> /\n3 -> +\n4 -> -\n5 -> **"
    )
  );
  var a = Number(prompt("Digite um valor:"));
  var b = Number(prompt("Digite um segundo valor:"));
  console.log(calcular_operacao(operacao, a, b));
} catch (erro) {
  console.log(erro.message);
}
