// Exercício 2: Escreva um algoritmo onde para a resposta 1,2,3
// responda “valores baixos” para 4,5,6 “valores médios” e 7,8,9
// valores altos, no caso de outra coisa escreva “não registrado”.

var resposta = Number(prompt("Digite um número:"));
switch (resposta) {
  case 1:
  case 2:
  case 3:
    console.log("Valores baixos.");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Valores médios.");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Valores altos.");
    break;
  default:
    console.log("Não registrado.");
    break;
}
