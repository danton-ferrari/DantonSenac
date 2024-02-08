// Esse era um código de lista de compras, de vez em quando ao
// digitar sair ele não sai da lista, ajeite para sempre que for digitado
// sair independente de maiusculo ou minusculo ele sempre funcione.

let listaCompras = [];
while (true) {
  var item = prompt(
    "Digite um item para adicionar à lista de compras (ou digite 'sair' para sair):"
  );
  if (item == "sair") {
    break;
  } else {
    listaCompras.push(item);
  }
}
alert("Lista de compras:\n" + listaCompras.join("\n"));
