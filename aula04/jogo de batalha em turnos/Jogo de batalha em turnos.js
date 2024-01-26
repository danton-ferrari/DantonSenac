let jogador_vida = 10;
let inimigo_vida = 10;
let recarregar_vida = 3;
let contador_rodadas = 0;
while (jogador_vida > 0 || inimigo_vida > 0) {
  contador_rodadas++;
  var start = prompt(
    `Rodada ${contador_rodadas}\nApert "enter" para iniciar a rodada`
  );
  if (start == "") {
    var sorteador = Math.floor(Math.random() * 10 + 1);
    if (sorteador <= 5) {
      if (recarregar_vida > 0) {
        var opcao = prompt("Atacar = 1\nVida = 2");
        if (opcao == 1) {
          inimigo_vida--;
          alert(
            `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
          );
        } else {
          jogador_vida += 3;
          recarregar_vida -= 1;
          alert(
            `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
          );
        }
      } else {
        inimigo_vida--;
        alert(
          `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
        );
      }
    } else {
      jogador_vida--;
      alert(
        `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
      );
    }
  }
}
