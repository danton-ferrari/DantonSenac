// Exercício 1:
// 1- A partir deste de cima, que conta o número de vagais em uma palavra ou frase, crie
// um que encontre letras contidas no nome Bruno, ou seja, onde tem as letras b, r, u, n, o.
// 2- Faça outro que apague todas as vogais da frase, para isso, ao inves de ter um
// contador de vogais, crie uma variável que começe vazia, com “”, e ao invés de analizar
// se a letra é uma vogal, analise se ela não é, se não for, adicione ela à variável nova
// criada agora.
// 3- Caso a letra “a” aparece, escreva ela “o” no lugar dela

let palavra = prompt("Digite uma palavra:").toLowerCase();
let contadorVogais = 0;
for (let i = 0; i < palavra.length; i++) {
  let letra = palavra.charAt(i);
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    contadorVogais++;
  }
}
alert("A palavra '" + palavra + "' possui " + contadorVogais + " vogais.");
