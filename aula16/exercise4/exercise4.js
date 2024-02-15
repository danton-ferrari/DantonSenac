// Exercício 4: Então, após a lista completa, faça uma série de ifs, que
// define quais animais a pessoa pode estar se referindo, por exemplo, se
// escrever 4 patas, mamífero e que come carne, pode ser gato, cachorro,
// lobo ou leão, mas agora, se escrever bípede mamífero que come
// vegetais, Canguru pode ser uma opção.

class Animal {
  constructor(nome, patas, alimentacao, mamifero) {
    this.nome = nome;
    this.patas = patas;
    this.alimentacao = alimentacao;
    this.mamifero = mamifero;
  }
  getInfo() {
    return `${this.nome}, tem ${this.patas} patas, come: ${
      this.alimentacao
    }, Mamifero: ${this.mamifero ? "Sim" : "Não"}`;
  }
}

function verificador(x, lista_animais) {
  var mensagem = "";
  for (var i = 0; i < lista_animais.length; i++) {
    if (lista_animais[i].alimentacao == x) {
      mensagem += lista_animais[i].getInfo() + "\n";
    } else if (lista_animais[i].alimentacao == x) {
      mensagem += lista_animais[i].getInfo() + "\n";
    } else if (lista_animais[i].patas == x) {
      mensagem += lista_animais[i].getInfo() + "\n";
    } else if (lista_animais[i].patas == x) {
      mensagem += lista_animais[i].getInfo() + "\n";
    } else if (lista_animais[i].mamifero == x) {
      mensagem += lista_animais[i].getInfo() + "\n";
    }
  }
  return mensagem;
}

//Dois exemplos de como criar
let lista_animais = [
  new Animal("boi", 4, "herbívoro", true),
  new Animal("veado", 4, "herbívoro", true),
  new Animal("gafanhoto", 6, "herbívoro", false),
  new Animal("borboleta", 6, "herbívoro", false),
  new Animal("zebra", 4, "herbívoro", true),
  new Animal("elefante", 4, "herbívoro", true),
  new Animal("girafa", 4, "herbívoro", true),
  new Animal("leão", 4, "carnívoro", true),
  new Animal("tigre", 4, "carnívoro", true),
  new Animal("tubarão", 8, "carnívoro", false),
  new Animal("onça", 4, "carnívoro", true),
  new Animal("serpente", 0, "carnívoro", false),
  new Animal("louva-a-deus", 6, "carnívoro", false),
];
// for (var i = 0; i < lista_animais.length; i++) {
//   console.log(lista_animais[i].getInfo());
// }

var opcao = Number(
  prompt(
    "Digite quais os tipos e animais que você quer ver:\nPara animais carnívoros digite -> 1\nPara animais herbívoros digite -> 2\nPara animais bípede digite -> 3\nPara animais quadrúpede digite -> 4\nPara animais mamíferos digite -> 5"
  )
);

switch (opcao) {
  case 1:
    console.log(verificador("carnívoro", lista_animais));
    break;
  case 2:
    console.log(verificador("herbívoro", lista_animais));
    break;
  case 3:
    console.log(verificador(2, lista_animais));
    break;
  case 4:
    console.log(verificador(4, lista_animais));
    break;
  case 5:
    console.log(verificador(true, lista_animais));
    break;
}
