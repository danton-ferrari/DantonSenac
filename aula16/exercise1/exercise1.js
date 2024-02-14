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
let aluno1 = new Aluno("João", 17, "9A");
let aluno2 = new Aluno("Maria", 16, "9B");
aluno1.setAprovado(true);
aluno2.setAprovado(false);
console.log(aluno1.getInfo());
console.log(aluno2.getInfo());
