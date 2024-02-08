// Na primeira parte o usuário escreve nomes e na segunda o
// programa escreve os nomes ditos, mas aparece mensagens de
// erro.

let nomes = [];
let nome = [];
while (true) {
  nome = prompt("Digite um nome ou 'sair' para sair:");
  if (nome.toLowerCase() == "sair") {
    break;
  } else {
    nomes.push(nome);
  }
}
if (nomes.length <= 0) {
  alert("Nenhum nome foi digitado.");
} else {
  alert("Lista de nomes:");
  for (let i = 0; i < nomes.length; i++) {
    alert(nomes[i]);
  }
}
