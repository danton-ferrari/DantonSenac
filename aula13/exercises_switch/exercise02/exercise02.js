// 2- Caso idade for 18, escreva que vai para o alistamento militar, caso
// idade em 17, escreva para se preparar que ano que vem ele vai se
// alistar, caso 19 pergunte se ele não se atrasou no alistamento, do
// contrário diga que não há nada para ser dito

let opcao = Number(prompt("Qual sua idade?"));
switch (opcao) {
  case 18:
    alert("Vai para o alistamento militar!");
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
