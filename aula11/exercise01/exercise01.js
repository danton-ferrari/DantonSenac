// Exercício 1: Monte um esquema onde o programa receba um nome
// de usuário, e se este nome for igual a “Maria” escreva “Pode
// entrar”, se for “Jorge” escreva “Ainda falta pagar pra entrar”, se
// estiver escrito “Claiton” mostre “Pq demorou tanto???” e caso
// qualquer outra coisa escreva “Não sei”.

var nome = prompt("Digite seu nome:");
switch (nome) {
  case "Maria":
    console.log("Pode entrar!");
    break;

  case "Jorge":
    console.log("Ainda falta pagar pra entrar");
    break;

  case "Claiton":
    console.log("Pq demorou tanto???");
    break;

  default:
    console.log("Não sei.");
    break;
}
