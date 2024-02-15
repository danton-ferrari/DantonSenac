// Exercício 2: Gere uma classe Filmes, contendo, nome, nota, sinopse, e
// defina para você poder mudar a nota do filme.

class Filmes {
  constructor(nome, nota, sinopse) {
    this.nome = nome;
    this.nota = nota;
    this.sinopse = sinopse;
  }
  definir_nota(nota) {
    return (this.nota = nota);
  }
  mensagem() {
    alert(`${this.nome}\nSinopse: ${this.sinopse}\nNota: ${this.nota}`);
  }
}
let filmes = new Filmes(
  "Deadpool & Wolverine",
  8,
  "Deadpool & Wolverine é um futuro filme de super-herói estadunidense baseado nos personagens Deadpool e Wolverine, da Marvel Comics, produzido pela Marvel Studios, Maximum Effort, e 21 Laps Entertainment, e distribuído pela Walt Disney Studios Motion Pictures."
);

filmes.definir_nota(Number(prompt("Defina uma nota de um a dez:")));
filmes.mensagem();
