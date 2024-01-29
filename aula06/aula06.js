alert(
  "Você tem 10 turnos para acertar a senha de uma bomba, se errar ela explode!"
);
var contagem = 10;
var senha = "Feijão";

while (contagem > 0) {
  var chute = prompt(`Rodada: ${contagem}\nInforme a senha:`);
  if (chute == senha) {
    contagem = -1;
  } else {
    contagem--;
  }
}

alert(contagem);
if (contagem == 0) {
  alert("BOOOM");
}
