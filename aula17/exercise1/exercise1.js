// Exercício 1: Crie uma classe chamada música, que contenha nome,
// autor, álbum, e letra, então crie um método chamado tocar onde ele
// escreva a letra da música num alert.

class Musica {
  constructor(nome, autor, album, letra) {
    this.nome = nome;
    this.autor = autor;
    this.album = album;
    this.letra = letra;
  }
  tocar() {
    alert(this.letra);
  }
}

let musica = new Musica(
  "Cristo Seja em Mim",
  "Pedro Valença e Ventania",
  "Cristo Seja em Mim",
  "Cristo seja em mim O princípio e durante Seja tudo a cada instante Desde quando eu acordar Até quando de noite for Seja em mim tão notável sua presença Que a minha voz se cale E que fale o Teu amor em cada gesto meu Cristo seja em mim Em todos os sentidos Cristo esteja em mim É tudo que eu preciso Cristo faz de mim Alguém mais parecido com o que há em Ti E que não permaneça mal o que insisto ser Que antes o Teu amor defina o meu viver Me molde e reconstrua para que eu seja assim Seja Cristo sempre em mim Porque não há outro jeito de viver Não há outro lugar onde eu mais queira estar Jesus Tua presença é o que me faz viver É o pão que me alimenta Onde estaria eu se não por Teu amor Sem ter tua bondade agindo em meu favor A tua doce paz transborda em meu viver Pra que outros possam ver Cristo seja em Mim Em todos os sentidos Cristo esteja em mim É tudo que eu preciso Cristo faz de mim alguém mais parecido com o que há em Ti E que não permaneça mal o que insisto ser Que antes o Teu amor defina o meu viver Me molde e reconstrua para que eu seja assim Seja Cristo sempre em mim Ah Ah Ah Para que eu seja assim, seja Cristo sempre Laraia Laraia"
);
musica.tocar();
