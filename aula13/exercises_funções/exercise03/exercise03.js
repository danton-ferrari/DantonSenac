// 3~Vamos evoluir o switch case criado anteriormente para alistamento
// militar, neste além dos valores de idade, pegue o nome da pessoa, e
// caso ele esteja na idade de se alistar chame uma função que mostre na
// tela o nome que tu citou e pergunte, “estuda?”, “trabalha?”, “filho
// único?”, e se todas forem verdadeiras, retorne “não alistado”
// Se uma já não for, sorteie se a pessoa vai ou não. Retorne então a
// resposta.

function idade18(nome) {
  var estuda = prompt(`${nome}, você estuda? (s/n)`).toLocaleLowerCase();
  var trabalha = prompt(`${nome}, você trabalha? (s/n)`).toLocaleLowerCase();
  var filhos = prompt(`${nome}, você tem filhos? (s/n)`).toLocaleLowerCase();
  if (estuda == "s" && trabalha == "s" && filhos == "s") {
    prompt("Não alistado!");
  } else if (estuda == "s" || trabalha == "s" || filhos == "s") {
    var sorteador = Math.floor(Math.random() * 10 + 1);
    alert(sorteador);
    alert(sorteador <= 5 ? "Não alistado!" : "Alistado!");
  } else {
    alert("Alistado!");
  }
}

let nome = prompt("Digite o seu nome:");
let opcao = Number(prompt("Qual sua idade?"));
switch (opcao) {
  case 18:
    idade18(nome);
    break;
  case 17:
    alert("Se prepare que ano que vem você vai se alistar!");
    break;
  case 19:
    alert("Se atrasou no alistamento?");
    break;
  default:
    alert("Não há nada para ser dito!");
    break;
}
