// Exercício 3: Uma objeto chamado esfinge que contenha um método
// pergunta, onde te mostra um prompt na tela e se a tua resposta for a
// correta ela se autodestrói (basta só transformar todos seus dados em
// null).

function autoDestruir() {
  esfinge = null;
  return alert("Esfinge vai autodestruir");
}

let esfinge = {
  resposta_correta: "10",
  pergunta: function (resposta) {
    if (resposta === this.resposta_correta) {
      this.resposta_correta = null;
      this.pergunta = null;
      alert("Você acertou!");
      autoDestruir();
    } else {
      alert("Você errou!");
    }
  },
};

var resposta = esfinge.pergunta(prompt("Quanto é 2x5:"));
alert(esfinge);
