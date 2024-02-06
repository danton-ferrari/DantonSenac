// Exercício 1 (CRUD):
// Usar o sistema de decidir entre 4 opções, adicionar nome a lista,
// remover nome da lista, mostrar nomes ou modificar nome. Caso
// adicione, apenas coloque o um novo nome no final da lista, caso
// remover encontre a posição onde ele está (para isso use .indexOf()
// ), e use o comando splice para apagar este, caso tenhamos um
// mostrar, apenas escreva os valores em um alert. e caso modificar,
// escreva o nome que quer ser alterado, o index dele e oque alterar

let Contas = [
  ["Mario", "123", 99],
  ["Alfredo", "senha incrivel", 10000],
  ["Anderson", "acorda santacruz", 2000],
  ["Beatriz", "321", 53000],
];
function nomePorSenha(contas, nome, senha) {
  for (let i = 0; i < contas.length; i++) {
    if (contas[i][0] == nome) {
      if (contas[i][1] == senha) {
        return true;
      }
    }
  }
  return false;
}
let nome = prompt("Diga um nome");
let senhaProcurada = prompt("Digite uma senha");
let encontrado = nomePorSenha(Contas, nome, senhaProcurada);
console.log(encontrado);
