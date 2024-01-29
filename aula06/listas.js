let nomes = [];
nomes.push("Alex");
nomes.push("Maicon");
nomes.push("Charlinhos");
console.log("Os Nomes: ", nomes);
let nomeRemovido = nomes.pop();
console.log("O Nome Removido foi:", nomeRemovido);
console.log("Lista Atualizada:", nomes);
nomes.unshift("David");
console.log("Lista Atualizada:", nomes);
let posicaoBob = nomes.indexOf("Maicon");
if (posicaoBob !== -1) {
  console.log("Maicon está na posição:", posicaoBob);
} else {
  console.log("Maicon não está na lista.");
}
