// 1- Caso opção seja nome Marcelo, escreva aprovado, caso seja Ana,
// escreva recuperação, caso nenhuma opção escreva nome não
// registrado

let opcao = prompt("Pergunta");
switch (opcao) {
  case "Marcelo":
    alert("Aprovado!");
    break;
  case "Ana":
    alert("Recuperação!");
    break;
  default:
    alert("Nome não registrado!");
    break;
}
