let lista = [];
let lista_peso = [];
let lista_altura = [];
let maior_peso = [];
let maior_altura = [];
let menor_peso = [];
let menor_altura = [];
while (true) {
  var nome = prompt('Para sair digite "s"!\nDigite o nome:');
  if (nome == "s") {
    break;
  }
  var peso = Number(prompt("Digite o peso:"));
  var altura = Number(prompt("Digite a altura:"));
  var temp = [nome, peso, altura];
  lista.push(temp);
}
for (var i = 0; i < lista.length; i++) {
  lista_peso.push(lista[i][1]);
  lista_altura.push(lista[i][2]);
}
lista_peso = lista_peso.sort();
lista_peso = [lista_peso[0], lista_peso.pop()];
lista_altura = lista_altura.sort();
lista_altura = [lista_altura[0], lista_altura.pop()];
for (i = 0; i < lista.length; i++) {
  if (lista[i][1] == lista_peso[1]) {
    maior_peso = lista[i];
  }
  if (lista[i][1] == lista_peso[0]) {
    menor_peso = lista[i];
  }
  if (lista[i][2] == lista_altura[1]) {
    maior_altura = lista[i];
  }
  if (lista[i][2] == lista_altura[0]) {
    menor_altura = lista[i];
  }
}
alert(`O maior peso é de: ${maior_peso[0]} com ${maior_peso[1]}Kg.`);
alert(`O menor peso é de: ${menor_peso[0]} com ${menor_peso[1]}Kg.`);
alert(`A maior altura é de: ${maior_altura[0]} com ${maior_altura[2]}cm.`);
alert(`A menor altura é de: ${menor_altura[0]} com ${menor_altura[2]}cm.`);
