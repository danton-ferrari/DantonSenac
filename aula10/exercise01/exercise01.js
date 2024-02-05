// Exercício 1-
// Caso o usuário escreva “soma”, abra uma calculadora de soma,
// caso escreva saudação, abra um gerador de saudação. (olhar
// exemplos)

// --- Start Functions --- //
function soma(a, b) {
  return a + b;
}

function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}
// --- Finish Functions --- //

var nome = prompt("Digite o seu nome:");
var qual_function = prompt(
  'Digite "+" para somar e "s" para saudações:'
).toLocaleLowerCase();
if (qual_function == "s") {
  saudacao(nome);
} else if (qual_function == "+") {
  a = Number(prompt("Digite um número:"));
  b = Number(prompt("Digite mais um número:"));
  resultado = soma(a, b);
  console.log(resultado);
} else {
  console.log("Valor informado incorreto!");
}
