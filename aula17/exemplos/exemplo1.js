// Exemplo de como pegar os elementos de um objeto:
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
let pessoa = new Pessoa("João", 30);
let propriedades = Object.keys(pessoa);
