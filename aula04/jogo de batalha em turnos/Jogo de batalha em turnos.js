// ------------------------------ Start Functions ------------------------------ //

// --- Sorteador Easy --- //
function sorteador_easy() {
  numero_sorteado = Math.floor(Math.random() * 10 + 1);
  if (numero_sorteado <= 8) {
    return true;
  } else {
    return false;
  }
}

// --- Sorteador Intermediary --- //
function sorteador_intermediary() {
  numero_sorteado = Math.floor(Math.random() * 10 + 1);
  if (numero_sorteado <= 5) {
    return true;
  } else {
    return false;
  }
}

// --- Sorteador Hard --- //
function sorteador_hard() {
  numero_sorteado = Math.floor(Math.random() * 10 + 1);
  if (numero_sorteado <= 3) {
    return true;
  } else {
    return false;
  }
}

function confere_vida() {
  if (recarregar_vida > 0 && jogador_vida <= 7) {
    return true;
  } else {
    false;
  }
}

function confere_start() {
  start = prompt(`Rodada ${rodadas}\nApert "enter" para iniciar a rodada`);
  return;
}

function cdf00() {
  cdf = false;
  cdf1 = true;
  return;
}

function cdf01() {
  cdf1 = false;
  cdf2 = true;
  return;
}

function cdf02() {
  cdf2 = false;
  cdf = true;
  return;
}

function menu_cdf() {
  if (numero_sorteado) {
    if (vida && df > 0) {
      menu01_cdf();
    } else if (vida) {
      menu02_cdf();
    } else if (df > 0) {
      menu03_cdf();
    } else {
      menu04_cdf();
    }
  } else {
    inimigo_ataque();
  }
}

function menu01_cdf() {
  var opcao = Number(prompt("Atacar = 1\nVida = 2\nDobrar-Ataque = 3"));
  if (opcao == 1) {
    inimigo_vida--;
    return alert(
      `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
    );
  } else if (opcao == 2) {
    jogador_vida += 3;
    recarregar_vida -= 1;
    return alert(
      `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
    );
  } else if (opcao == 3) {
    inimigo_vida -= 2;
    cdf00();
    df--;
    return alert(
      `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
    );
  }
}

function menu02_cdf() {
  var opcao = Number(prompt("Atacar = 1\nVida = 2"));
  if (opcao == 1) {
    inimigo_vida--;
    return alert(
      `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
    );
  } else if (opcao == 2) {
    jogador_vida += 3;
    recarregar_vida -= 1;
    return alert(
      `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
    );
  }
}

function menu03_cdf() {
  var opcao = prompt("Atacar = 1\nDobrar-Ataque = 3");
  if (opcao == 1) {
    inimigo_vida--;
    return alert(
      `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
    );
  } else if (opcao == 3) {
    inimigo_vida -= 2;
    cdf00();
    df--;
    return alert(
      `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
    );
  }
}

function menu04_cdf() {
  inimigo_vida--;
  return alert(
    `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
  );
}

function inimigo_ataque() {
  jogador_vida--;
  return alert(
    `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
  );
}

function menu_cdf1() {
  if (numero_sorteado) {
    if (vida) {
      menu01_cdf1();
    } else {
      menu02_cdf1();
    }
  } else {
    inimigo_ataque();
  }
}

function menu01_cdf1() {
  var opcao = prompt("Atacar = 1\nVida = 2");
  if (opcao == 1) {
    inimigo_vida -= 2;
    cdf01();
    return alert(
      `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
    );
  } else if (opcao == 2) {
    jogador_vida += 3;
    recarregar_vida -= 1;
    return alert(
      `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
    );
  }
}

function menu02_cdf1() {
  inimigo_vida -= 2;
  cdf01();
  return alert(
    `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
  );
}

function menu_cdf2() {
  if (numero_sorteado) {
    if (vida) {
      menu01_cdf2();
    } else {
      menu02_cdf2();
    }
  } else {
    inimigo_ataque();
  }
}

function menu01_cdf2() {
  var opcao = prompt("Atacar = 1\nVida = 2");
  if (opcao == 1) {
    inimigo_vida -= 2;
    cdf02();
    return alert(
      `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
    );
  } else if (opcao == 2) {
    jogador_vida += 3;
    recarregar_vida -= 1;
    return alert(
      `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
    );
  }
}

function menu02_cdf2() {
  inimigo_vida -= 2;
  cdf02();
  return alert(
    `Vida do jogador: ${jogador_vida}\nVida do inimigo: ${inimigo_vida}`
  );
}
// ------------------------------ End Functions ------------------------------ //

// ------------------------------ Start Variaveis ------------------------------ //
let perdeu = false;
let experiencia = 0;
let contador_experiencia = 0;
let nivel_jogador = 0;
let jogador_vida = 10;
let inimigo_vida = 10;
let recarregar_vida = 3;
let df = 3;
let rodadas = 0;
let cdf = true;
let cdf1 = false;
let cdf2 = false;
let nivel_partida = Number(prompt("Easy = 1\nIntermediary = 2\nHard = 3:"));
// ------------------------------ End Variaveis ------------------------------ //

// --- Easy --- //
if (nivel_partida == 1) {
  while (true) {
    if (perdeu) {
      break;
    } else if (contador_experiencia < 3) {
      while (jogador_vida > 0 && inimigo_vida > 0) {
        rodadas++;
        var numero_sorteado = sorteador_easy();
        var start = confere_start();
        var vida = confere_vida();
        if (cdf) {
          menu_cdf();
        } else if (cdf1) {
          menu_cdf1();
        } else if (cdf2) {
          menu_cdf2();
        }
      }
      if (jogador_vida > 0) {
        experiencia++;
        contador_experiencia++;
        jogador_vida = 10;
        inimigo_vida = 10;
        rodadas = 0;
        cdf = true;
        df = 3;
        recarregar_vida = 3;
        alert(`Experiencia do jogador é: ${experiencia}`);
      } else if (inimigo_vida > 0 && experiencia > 0) {
        experiencia--;
        jogador_vida = 10;
        inimigo_vida = 10;
        rodadas = 0;
        cdf = true;
        df = 3;
        recarregar_vida = 3;
        alert(`Experiencia do jogador é: ${experiencia}`);
      } else {
        alert("Você perdeu!");
        perdeu = true;
        break;
      }
    } else {
      nivel_jogador++;
      contador_experiencia = 0;
      alert(`Nivel do jogador é: ${nivel_jogador}`);
    }
  }
}

// --- Intermediary --- //
else if (nivel_partida == 2) {
  while (true) {
    if (perdeu) {
      break;
    } else if (contador_experiencia < 3) {
      while (jogador_vida > 0 && inimigo_vida > 0) {
        rodadas++;
        var numero_sorteado = sorteador_intermediary();
        var start = confere_start();
        var vida = confere_vida();
        if (cdf) {
          menu_cdf();
        } else if (cdf1) {
          menu_cdf1();
        } else if (cdf2) {
          menu_cdf2();
        }
      }
      if (jogador_vida > 0) {
        experiencia++;
        contador_experiencia++;
        jogador_vida = 10;
        inimigo_vida = 10;
        rodadas = 0;
        cdf = true;
        df = 3;
        recarregar_vida = 3;
        alert(`Experiencia do jogador é: ${experiencia}`);
      } else if (inimigo_vida > 0 && experiencia > 0) {
        experiencia--;
        jogador_vida = 10;
        inimigo_vida = 10;
        rodadas = 0;
        cdf = true;
        df = 3;
        recarregar_vida = 3;
        alert(`Experiencia do jogador é: ${experiencia}`);
      } else {
        alert("Você perdeu!");
        perdeu = true;
        break;
      }
    } else {
      nivel_jogador++;
      contador_experiencia = 0;
      alert(`Nivel do jogador é: ${nivel_jogador}`);
    }
  }
}

// --- Hard --- //
else if (nivel_partida == 3) {
  while (true) {
    if (perdeu) {
      break;
    } else if (contador_experiencia < 3) {
      while (jogador_vida > 0 && inimigo_vida > 0) {
        rodadas++;
        var numero_sorteado = sorteador_hard();
        var start = confere_start();
        var vida = confere_vida();
        if (cdf) {
          menu_cdf();
        } else if (cdf1) {
          menu_cdf1();
        } else if (cdf2) {
          menu_cdf2();
        }
      }
      if (jogador_vida > 0) {
        experiencia++;
        contador_experiencia++;
        jogador_vida = 10;
        inimigo_vida = 10;
        rodadas = 0;
        cdf = true;
        df = 3;
        recarregar_vida = 3;
        alert(`Experiencia do jogador é: ${experiencia}`);
      } else if (inimigo_vida > 0 && experiencia > 0) {
        experiencia--;
        jogador_vida = 10;
        inimigo_vida = 10;
        rodadas = 0;
        cdf = true;
        df = 3;
        recarregar_vida = 3;
        alert(`Experiencia do jogador é: ${experiencia}`);
      } else {
        alert("Você perdeu!");
        perdeu = true;
        break;
      }
    } else {
      nivel_jogador++;
      contador_experiencia = 0;
      alert(`Nivel do jogador é: ${nivel_jogador}`);
    }
  }
}
