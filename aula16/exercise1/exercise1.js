// Exercício 1: A partir do código abaixo, crie mais 5 alunos, de turmas
// diferentes e diga se estão aprovados ou não.

class Aluno {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
    this.aprovado = false;
  }
  setAprovado(aprovado) {
    this.aprovado = aprovado;
  }
  getInfo() {
    return `${this.nome}, ${this.idade} anos, Turma: ${this.turma}, Aprovado: ${
      this.aprovado ? "Sim" : "Não"
    }`;
  }
}
//Dois exemplos de como criar
let lista_alunos = [
  new Aluno("Danton", 20, "9A"),
  new Aluno("Marjory", 18, "9B"),
  new Aluno("Thaís", 12, "9A"),
  new Aluno("Fernanda", 16, "9B"),
  new Aluno("Gabriela", 18, "9A"),
  new Aluno("Jerri", 20, "9B"),
  new Aluno("Djanice", 20, "9A"),
  new Aluno("Jairo", 20, "9B"),
  new Aluno("Thalis", 12, "9A"),
  new Aluno("Silvania", 13, "9B"),
  new Aluno("Alberi", 14, "9A"),
  new Aluno("Diessi", 11, "9B"),
  new Aluno("Luana", 19, "9A"),
  new Aluno("Vó", 30, "9B"),
  new Aluno("Tia", 20, "9A"),
];
for (var i = 0; i < lista_alunos.length; i++) {
  if (i % 2 === 0) {
    lista_alunos[i].setAprovado(true);
  } else {
    lista_alunos[i].setAprovado(false);
  }
  console.log(lista_alunos[i].getInfo());
}
