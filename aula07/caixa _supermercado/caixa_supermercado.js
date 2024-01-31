// --- Inicio Funções --- //
function menu(itens) {
  var qtde = Number(prompt("Digite a quantidade do produto:"));
  var produto = itens[0];
  var valor = qtde * itens[1];
  var temp = [produto + " - quantidade: " + qtde + " - R$" + valor + "\n"];
  var temp = nota_fiscal.push(temp);
}
// --- Fim Funções --- //

// --- Inicio Váriaveis --- //
let itens = [
  ["arroz", 5],
  ["feijao", 4],
  ["massa", 2.5],
  ["ovos", 10],
  ["carne", 15],
];
let nota_fiscal = [];
// --- Fim Váriaveis --- //

// --- Inicio Estrutura Código --- //
while (true) {
  alert(
    'Código dos produtos:\nArroz = "um"\nFeijão = "dois"\nMassa = "tres"\nOvos = "quatro"\nCarne = "cinco"'
  );
  var codigo = prompt("Digite o código do produto:");
  if (codigo == "um") {
    menu(itens[0]);
  } else if ((codigo = "dois")) {
    menu(itens[1]);
  } else if ((codigo = "tres")) {
    menu(itens[2]);
  } else if ((codigo = "quatro")) {
    menu(itens[3]);
  } else if ((codigo = "cinco")) {
    menu(itens[4]);
  }
  var continuar = prompt(
    'Para adicionar mais alguma coisa aperte "+"\nPara emitir a NF aperte "-"'
  );
  if (continuar == "-") {
    break;
  }
}
// --- Fim Estrutura Código --- //

alert(nota_fiscal);
