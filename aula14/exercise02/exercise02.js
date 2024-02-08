// Se o nome estiver na lista deixe passar, se não barre a entrada,
// mas ele está deixando todo mundo passar! Resolva:

let listaVip = ["João", "Maria", "Ana"];
let nome = prompt("Digite seu nome:");
if (listaVip.includes(nome)) {
  alert("Acesso permitido.");
} else {
  alert("Acesso negado.");
}
