// Exercício 2: Monte um algoritmo que te mostre quais acentos no
// cinema estão ocupados, e usando um sistema estilo “batalha
// naval” de posicionamento, informe qual acento ocupar, e qual
// desocupar.

// let minilista = [0,0,0,0,"\n"]
// let lista = [minilista,minilista,minilista,minilista]
// let mensagem = ""
// for(let i=0; i<lista.length;i++){
//   for(var j=0; j<minilista.length;j++ ){
//   mensagem+=lista[i][j]
//   }
// }

let array = [
  [0, 0, 0, 0, 0, "\n"],
  [0, 0, 0, 0, 0, "\n"],
  [0, 0, 0, 0, 0, "\n"],
  [0, 0, 0, 0, 0, "\n"],
  [0, 0, 0, 0, 0, "\n"],
];

alert(array.join(""));
let mostrar = "";
var opcao = Number(prompt("Escolha fileira da cadeira:?"));
var opcao2 = Number(prompt("Escolha a coluna da cadeira:"));
if (array[opcao][opcao2] != "x") {
  array[opcao][opcao2] = "x";
}
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    mostrar += " " + array[i][j];
  }
}
alert(mostrar);
