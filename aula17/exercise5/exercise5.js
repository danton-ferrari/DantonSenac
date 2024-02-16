// Exercício 5: No mesmo código, escreva todos os elementos contidos
// nesse objeto.

let pessoa = {
  nome: "Danton",
  idade: 20,
  cor: "branco",
};
let carro = {
  modelo: "Honda-Civic",
  marca: "Honda",
  cor: "branco",
};
let curso = {
  nome: "Engenharia-Software",
  duracao: 5,
  tipo: "baicharel",
};
let comida = {
  nome: "pizza",
  tamanho: "familia",
  sabor: "strogonoff",
};
let bebida = {
  nome: "energetico",
  marca: "Monster",
  sabor: "laranja",
};

function editor(x) {}

let objetos = [pessoa, carro, curso, comida, bebida];

let pergunta = prompt(
  "Digite uma palavra chave para iniciar a pesquisa:\nNome\nIdade\nCor\nDuracao\nTipo\nTamanho\nSabor\nMarca\nModelo"
).toLocaleLowerCase();

for (var objeto of objetos) {
  var m = "";
  if (objeto.hasOwnProperty(pergunta)) {
    var um = Object.keys(objeto);
    var dois = Object.values(objeto);
    for (var i = 0; i < um.length; i++) {
      m += um[i] + " = " + dois[i] + "\n";
    }
    alert(m);
  }
}
