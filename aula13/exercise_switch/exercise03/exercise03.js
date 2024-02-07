// 3- Caso código seja igual a 123 escreva “acessar tela 1”, caso seja
// abcde escreva “acessar tela 2”, e caso nenhum dos dois escreva “Tela
// inexistente”.

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
