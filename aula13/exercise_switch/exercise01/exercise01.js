// 1- Caso opção seja nome Marcelo, escreva aprovado, caso seja Ana,
// escreva recuperação, caso nenhuma opção escreva nome não
// registrado

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
