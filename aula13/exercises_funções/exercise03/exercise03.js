// 3~Vamos evoluir o switch case criado anteriormente para alistamento
// militar, neste além dos valores de idade, pegue o nome da pessoa, e
// caso ele esteja na idade de se alistar chame uma função que mostre na
// tela o nome que tu citou e pergunte, “estuda?”, “trabalha?”, “filho
// único?”, e se todas forem verdadeiras, retorne “não alistado”
// Se uma já não for, sorteie se a pessoa vai ou não. Retorne então a
// resposta.

let opcao = prompt("Pergunta");
switch (opcao) {
  case "a":
    alert("primeira opção");
    break;
  case "b":
    alert("segunda opção");
    break;
  default:
    alert("nenhuma obtida");
    break;
}
