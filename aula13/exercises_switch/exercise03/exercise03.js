// 3- Caso código seja igual a 123 escreva “acessar tela 1”, caso seja
// abcde escreva “acessar tela 2”, e caso nenhum dos dois escreva “Tela
// inexistente”.

let opcao = prompt("Qual o código?");
switch (opcao) {
  case "123":
    alert("Acessar tela 1.");
    break;
  case "abcd":
    alert("Acessar tela 2.");
    break;
  default:
    alert("Tela inexistente.");
    break;
}
