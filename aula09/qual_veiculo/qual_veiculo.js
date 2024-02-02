// Exercício 2- Qual veículo usar?:
// Uma empresa de transporte de carga contratou você para criar um
// programa que determina o tipo de veículo necessário para
// transportar uma carga com base no peso. Se o peso for até 500 kg,
// sugira um carro, se for até 2000 kg, sugira uma van, caso contrário,
// sugira um caminhão.
// Exercício 2.2- Preços:
// Agora definido o veiculo, com base nele vamos calcular o valor do
// frete, que deve ser o peso da carga vezes a distância percorrida
// vezes 2 para carro, peso vezes distância vezes 2.5 para van, e peso
// vezes distância vezes 3,5 para caminhão.
// Exercício 2.3- Descontos e acréscimos:
// Se a distância for menor que 20Km, dê um desconto de 15%, caso
// distância seja maior que 120Km, cobrar 15% a mais.

let array = [
  ["carro", 0, 500, 2],
  ["van", 501, 2000, 2.5],
  ["caminhão", 2001, 10000, 3.5],
];

let carga = Number(prompt("Qual a carga?"));
let distancia = Number(prompt("Qual a distancia em Km?"));
for (var i = 0; i < array.length; i++) {
  if (carga >= array[i][1] && carga <= array[i][2]) {
    var preco = carga * distancia * array[i][3];
    var desconto_acrescimo =
      distancia <= 20000
        ? preco - preco * 0.15
        : 20000 < distancia <= 120000
        ? (desconto_acrescimo = preco)
        : desconto_acrescimo + desconto_acrescimo * 0.15;
    alert(
      `Você precisa usar um(a) ${
        array[i][0]
      }\nO valor a pagar é de R$${desconto_acrescimo.toFixed(2)}`
    );
  }
}
