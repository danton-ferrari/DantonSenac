// Exercício 2-
// Monte uma calculadora, assim como na primeira aula, (usando
// sistema de ifs), mas dessa vez faça ele puxar uma função para
// cada conta.

// --- Start Fanctions -- //
function divisao(a, b) {
  console.log(a / b);
}
function multiplicacao(a, b) {
  console.log(a * b);
}
function adicao(a, b) {
  console.log(a + b);
}
function subtracao(a, b) {
  console.log(a - b);
}
// --- Finish Fanctions -- //

var operacao = prompt(
  "Digite a operação desejada:\nDividido -> / \nMultiplicação -> *\nAdição -> +\nSubtração -> -"
);
var a = Number(prompt("Digite um número:"));
var b = Number(prompt("Digite mais um número:"));
if (operacao == "/") {
  divisao(a, b);
}
if (operacao == "*") {
  multiplicacao(a, b);
}
if (operacao == "+") {
  adicao(a, b);
}
if (operacao == "-") {
  subtracao(a, b);
}
