// Exercício 4:
// Corrija os códigos:

// Contador regressivo:
let numero = prompt("Digite um número para começar a contagem regressiva:");
while (numero >= 0) {
  alert(numero);
  numero--;
}
// Calculadora de idade:
let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento:"));
let anoAtual = new Date().getFullYear();
let idade = anoNascimento - anoAtual;
alert("Você tem aproximadamente " + idade + " anos.");
// Simulador de jogar dados:
let numeroJogadas = parseInt(
  prompt("Quantas vezes você deseja lançar o dado?")
);
let resultados = [];
for (let i = 1; i < numeroJogadas - 1; i++) {
  resultados.push(Math.floor(Math.random() * 6) + 1);
}
alert("Resultados dos lançamentos: " + resultados.join(", "));
// Conversor de Metro pra centímetro e vice versa:
function metrosParaCentimetros(metros) {
  return metros / 100;
}
function centimetrosParaMetros(centimetros) {
  return centimetros * 100;
}
let escolha = parseInt(
  prompt(
    "Escolha a conversão:\n1. Metros para Centímetros\n2. Centímetros para Metros"
  )
);
if (escolha == "1") {
  let metros = parseFloat(prompt("Digite a quantidade de metros:"));
  let centimetros = metrosParaCentimetros(metros);
  alert(metros + " metros equivalem a " + centimetros + " centímetros.");
} else if (escolha == "2") {
  let centimetros = parseFloat(prompt("Digite a quantidade de centímetros:"));
  let metros = centimetrosParaMetros(centimetros);
  alert(centimetros + " centímetros equivalem a " + metros + " metros.");
} else {
  alert("Escolha inválida.");
}
