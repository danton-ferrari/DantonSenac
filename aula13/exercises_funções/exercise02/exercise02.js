// 2~ Para a primeira opção escreva uma função que faça uma contagem
// regressiva de 10 a 1, e para cada número escreva em um alert, e para o
// segundo case crie uma função com os nomes destes itens de lista
// criados anteriormente, mas que aleatoriamente escolha um deles.

function tela2() {
  var lista = ["Maçã", "Laranja", "Uva", "Café", "Leite", "Pão"];
  alert(lista[Math.floor(Math.random() * lista.length)]);
}

let opcao = prompt("Digite uma opção:\na\nb");
switch (opcao) {
  case "a":
    var numero = 10;
    for (var i = 0; numero > 0; i++) {
      alert(numero);
      numero--;
    }
    break;
  case "b":
    tela2();
    break;
  default:
    alert("nenhuma obtida");
    break;
}
