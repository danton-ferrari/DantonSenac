let jogador_vida = 10;
let inimigo_vida = 10;
let recarregar_vida = 3;
let dobrar_forca = 3;
let contador_dobrar_forca = 0;
let contador_rodadas = 0;
while (jogador_vida > 0 && inimigo_vida > 0) {
  contador_rodadas++;
  var start = prompt(
    `Rodada ${contador_rodadas}\nApert "enter" para iniciar a rodada`
  );
  //------------ // Contador Dobrar Força não pode estar ativado para este if // -----------//
  if (start == "" && contador_dobrar_forca == 0) {
    var sorteador = Math.floor(Math.random() * 10 + 1);
    // ----------- Se o jogador for sorteado ------------//
    if (sorteador <= 5) {
      // --------- Se o jogador for sorteado e tiver a opção de dobrar força e de recarregar vida ----------//
      if (recarregar_vida > 0 && jogador_vida <= 7 && dobrar_forca > 0) {
        var opcao = prompt("Atacar = 1\nVida = 2\nDobrar-Ataque = 3");
        //  --- Jogador Ataca --- //
        if (opcao == 1) {
          inimigo_vida--;
          alert(
            `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
          );
        }
        //  --- Jogador Recarrega a Vida --- //
        else if (opcao == 2) {
          jogador_vida += 3;
          recarregar_vida -= 1;
          alert(
            `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
          );
        }
        // --- Jogador Dobra a Força --- //
        else if (opcao == 3) {
          inimigo_vida -= 2;
          contador_dobrar_forca++; // Conta como primeira rodada do Dobra Força
          dobrar_forca--; // Diminui 1
          alert(
            `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
          );
        }
      }
      // -------- Else if da opção Recarregar Vida e Atacar o Inimigo mas sem a opção Dobrar Força ------- //
      else if (recarregar_vida > 0 && jogador_vida <= 7) {
        var opcao = prompt("Atacar = 1\nVida = 2");
        // --- Atacar Inimigo --- //
        if (opcao == 1) {
          inimigo_vida--;
          alert(
            `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
          );
        }
        //  --- Jogador Recarrega a Vida --- //
        else if (opcao == 2) {
          jogador_vida += 3;
          recarregar_vida -= 1;
          alert(
            `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
          );
        }
      }
      // -------- Else if da opção Atacar o Inimigo e Dobrar Força mas sem a opção Recarregar Vida ------- //
      else if (dobrar_forca > 0) {
        var opcao = prompt("Atacar = 1\nDobrar-Ataque = 3");
        // --- Atacar Inimigo --- //
        if (opcao == 1) {
          inimigo_vida--;
          alert(
            `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
          );
        }
        // --- Jogador Dobra a Força --- //
        else if (opcao == 3) {
          inimigo_vida -= 2;
          contador_dobrar_forca++; // Conta como primeira rodada do Dobra Força
          dobrar_forca--; // Diminui 1
          alert(
            `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
          );
        }
      }
      // -- Else if de Atacar Inimigo sem opção de Dobrar Força e Recarregar Vida --- //
      else {
        inimigo_vida--;
        alert(
          `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
        );
      }
    }
    // -------- Inimigo For Sorteado ele Ataca ------- //
    else {
      jogador_vida--;
      alert(
        `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
      );
    }
  }
  // ------- // Contador Dobra força Ativado // ------ //
  else if (start == "" && contador_dobrar_forca > 0) {
    var sorteador = Math.floor(Math.random() * 10 + 1);
    // ----------- Se o jogador for sorteado ------------//
    if (sorteador <= 5) {
      // ----- If da opção Recarregar Vida e Atacar o Inimigo e Contador Dobra Força na primeira rodada ---- //
      if (
        recarregar_vida > 0 &&
        jogador_vida <= 7 &&
        contador_dobrar_forca == 1
      ) {
        var opcao = prompt("Atacar = 1\nVida = 2");
        // --- Jogador Ataca --- //
        if (opcao == 1) {
          inimigo_vida -= 2;
          contador_dobrar_forca += 1;
          alert(
            `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
          );
        }
        //  --- Jogador Recarrega a Vida --- //
        else if (opcao == 2) {
          jogador_vida += 3;
          recarregar_vida -= 1;
          alert(
            `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
          );
        }
      }
      // --- If da opção Atacar o Inimigo e Contador Dobra Força na primeira rodada mas sem Rearregar Vida -- //
      else if (contador_dobrar_forca == 1) {
        inimigo_vida -= 2;
        contador_dobrar_forca += 1;
        alert(
          `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
        );
      }
      // ----- If da opção Recarregar Vida e Atacar o Inimigo e Contador Dobra Força na segunda rodada ---- //
      else if (
        recarregar_vida > 0 &&
        jogador_vida <= 7 &&
        contador_dobrar_forca == 2
      ) {
        var opcao = prompt("Atacar = 1\nVida = 2");
        // --- Jogador Ataca --- //
        if (opcao == 1) {
          inimigo_vida -= 2;
          contador_dobrar_forca = 0;
          alert(
            `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
          );
        }
        //  --- Jogador Recarrega a Vida --- //
        else if (opcao == 2) {
          jogador_vida += 3;
          recarregar_vida -= 1;
          alert(
            `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
          );
        }
      }
      // --- If da opção Atacar o Inimigo e Contador Dobra Força na segunda rodada mas sem Rearregar Vida -- //
      else if (contador_dobrar_forca == 1) {
        inimigo_vida -= 2;
        contador_dobrar_forca = 0;
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

if (jogador_vida > 0) {
  alert("Winner");
} else {
  alert("Game Over");
}
