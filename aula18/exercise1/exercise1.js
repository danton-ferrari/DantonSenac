// Exercício 1:
// Monte 3 códigos que irão gerar falhas e faça o try-catch pegar elas.
// Quando você deseja criar um tipo de erro novo, podemos usar o seguinte comando
// throw new Error(“Mensagem que deve aparecer”)
// Deste modo, podemos dizer que, por exemplo, nãopodemos realizar uma divisão por zero
// em uma função:
function dividir(a, b) {
  return a / b;
}
function executarOperacaoMatematica(operacao, a, b) {
  switch (operacao) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b == 0) {
        throw new Error("Divisão por zero");
      }
      return dividir(a, b);
    default:
      throw new Error("Operação matemática inválida");
  }
}
try {
  console.log(executarOperacaoMatematica("+", 10, 5));
  console.log(executarOperacaoMatematica("-", 10, 5));
  console.log(executarOperacaoMatematica("*", 10, 5));
  console.log(executarOperacaoMatematica("/", 10, 5));
  console.log(executarOperacaoMatematica("$", 10, 5));
} catch (erro) {
  console.log("Ocorreu um erro:", erro.message);
}
