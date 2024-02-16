// Deste modo, podemos dizer que, por exemplo, não podemos realizar uma divisão por zero
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
