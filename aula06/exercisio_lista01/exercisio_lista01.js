let lista = [];

while (nome != "s") {
  var nome = prompt('Para sair digite "s"!\nDigite um nome para sua lista:');
  lista.push(" " + nome);
}
lista.pop();
for (let i = 0; i < lista.length; i++) {
  alert(lista[i]);
}
