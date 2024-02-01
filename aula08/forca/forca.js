// Um jogo da forca, este deve escolher um item aleatório de uma lista,
// que contém palavras, essa palavra deve ser adivinhada com no máximo
// 6 erros “cabeça, corpo, dois braços e duas pernas”. Ao escrever uma
// letra correta mostre na tela onde na palavra ela está.

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
    alert(`Você chegou no limite maximo de chances. A palavra era: ${sorteio}`);
  }
}
