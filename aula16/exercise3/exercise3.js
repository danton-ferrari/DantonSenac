// Exercício 3: Agora crie uma classe animal que contenha quantidade de
// patas, se é mamífero, e o que come, e adicione numa lista todos os
// itens, para depois fazer um teste nele.

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
for (var i = 0; i < lista_animais.length; i++) {
  console.log(lista_animais[i].getInfo());
}
