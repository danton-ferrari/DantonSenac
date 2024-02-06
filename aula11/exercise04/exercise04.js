// Exercício 4: No menu do exercício final da aula 10, troque de if para
// Switch nos blocos de código de escolhas.

// --- Qual Veículo --- //
function qual_veículo() {
  let array = [
    ["carro", 0, 500, 2],
    ["van", 501, 2000, 2.5],
    ["caminhão", 2001, 10000, 3.5],
  ];
  let carga = Number(prompt("Qual a carga?"));
  let distancia = Number(prompt("Qual a distancia em Km?"));
  for (var i = 0; i < array.length; i++) {
    if (carga >= array[i][1] && carga <= array[i][2]) {
      var preco = carga * distancia * array[i][3];
      var desconto_acrescimo =
        distancia <= 20
          ? preco - preco * 0.15
          : 20 < distancia <= 120
          ? (desconto_acrescimo = preco)
          : desconto_acrescimo + desconto_acrescimo * 0.15;
      alert(
        `Você precisa usar um(a) ${
          array[i][0]
        }\nO valor a pagar é de R$${desconto_acrescimo.toFixed(2)}`
      );
    }
  }
}
// --- Qual Veículo --- //

// --- Forca --- //
function forca() {
  let palavras = ["feijão", "cachorro", "vscode", "mouse", "linkedin"];
  let sorteio = palavras[Math.floor(Math.random() * palavras.length)];
  let palavra = Array(sorteio.length).fill("_");
  let chances = 0;

  while (chances < 6) {
    var letra = prompt(
      `Palavra: ${palavra.join(" ")}\nErros restantes: ${
        6 - chances
      }\nDigite uma letra:`
    ).toLowerCase();

    var letra_encontrada = false;
    for (var i = 0; i < sorteio.length; i++) {
      if (letra == sorteio[i]) {
        palavra[i] = letra;
        letra_encontrada = true;
      }
    }
    if (!letra_encontrada) {
      chances++;
    }
    if (palavra.join("") == sorteio) {
      alert(
        `Parabéns, você acertou a palavra ${palavra.join(" ")} com ${
          6 - chances
        } chances restantes.`
      );
      break;
    }
    if (chances == 6) {
      alert(
        `Você chegou no limite maximo de chances. A palavra era: ${sorteio}`
      );
    }
  }
}
// --- Forca --- //

// --- Eficiência Carro --- //
function eficiência_carro() {
  var a = "Bom";
  var b = "Regular";
  var c = "Ruim";
  var mensagens = [a, b, c];
  var qtde_km = Number(prompt("Quantos Km você andou?"));
  var qtde_gasolina = Number(prompt("Quantos litros de gasolina você usou?"));
  var metrica = qtde_gasolina / qtde_km;
  if (metrica <= 10) {
    alert(mensagens[2]);
  } else if (10 > metrica <= 15) {
    alert(mensagens[1]);
  } else if (metrica > 15) {
    alert(mensagens[0]);
  }
}
// --- Eficiência Carro --- //

while (true) {
  console.log(
    "1 -> Qual Veículo Usar\n2 -> Jogo da Forca\n3 -> Eficiência do Carro"
  );
  var oq_fazer = Number(prompt("Digite o que deseja fazer:"));
  if (oq_fazer == 1) {
    qual_veículo();
  } else if (oq_fazer == 2) {
    forca();
  } else if (oq_fazer == 3) {
    eficiência_carro();
  } else if (oq_fazer == 4) {
    break;
  } else {
    console.log("Você digitou incorretamente! tente novamente.");
  }
}
