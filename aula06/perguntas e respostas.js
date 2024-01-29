var pergunta01 = 4;
var pergunta02 = 10;
var pergunta03 = 5;

while (true) {
  var resposta01 = Number(prompt("Quanto é 2x2:"));
  if (pergunta01 != resposta01) {
    alert("Game Over!");
    break;
  }
  var resposta02 = Number(prompt("Quanto é 2x5:"));
  if (pergunta02 != resposta02) {
    alert("Game Over!");
    break;
  }
  var resposta03 = Number(prompt("Quanto é 10/2:"));
  if (pergunta03 != resposta03) {
    alert("Game Over!");
    break;
  }
  alert("Parabéns, você venceu!");
  break;
}
