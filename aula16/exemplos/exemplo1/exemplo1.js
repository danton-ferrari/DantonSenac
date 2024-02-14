class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
  envelhecer() {
    this.idade++;
    console.log(`Agora tenho ${this.idade} anos.`);
  }
}
let pessoa1 = new Pessoa("João", 30);
pessoa1.saudacao();
