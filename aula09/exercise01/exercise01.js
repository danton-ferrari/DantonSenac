// Exercício 1 - Calculadora de desconto:
// Imagine que você tenha que criar um software para uma loja que
// sempre dá 5% de desconto para compras acima de R$100, monte
// de tal forma que o caixa escreva o preço e depois informe quanto
// que tem que pagar.

function menu(itens) {
  var qtde = Number(prompt("Digite a quantidade do produto:"));
  var produto = itens[0];
  var valor = qtde * itens[1];
  var temp = [produto + " - quantidade: " + qtde + " - R$" + valor + "\n"];
  var temp = nota_fiscal.push(temp);
  preco += valor;
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
let preco = 0;
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
    let desconto = preco * 0.05;
    let preco_novo = preco >= 100 ? preco - desconto : preco;
    let preco_desconto =
      "\nO preço com desconto é de: R$" + preco_novo.toFixed(2);
    nota_fiscal.push(preco_desconto);
    break;
  }
}
// --- Fim Estrutura Código --- //

alert(nota_fiscal.join(""));
