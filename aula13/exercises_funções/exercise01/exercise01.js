// 1~ Para a tela 1 crie uma função chamada meu nome, onde você
// escreve seu nome e ele te diz, “olá seu nome seja bem vindo!”
// Para a tela 2 escreva uma função onde escreva na tela uma lista de
// itens de supermercado, apenas o nome destes em um alert

function meu_nome() {
  var nome = prompt("Digite seu nome:");
  alert(`Olá ${nome} seja bem vindo!`);
}

function tela2() {
  alert("Maçã\nLaranja\nUva\nCafé\nLeite\nPão");
}

let opcao = prompt("Qual o código?");
switch (opcao) {
  case "123":
    alert("Acessar tela 1.");
    meu_nome();
    break;
  case "abcd":
    alert("Acessar tela 2.");
    tela2();
    break;
  default:
    alert("Tela inexistente.");
    break;
}
