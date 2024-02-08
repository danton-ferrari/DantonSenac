// Uma escola pediu um software pra calcular notas, mas agora
// temos o seguinte problema, ele não está calculando direito, e
// também tem muitos zeros depois do ponto da nota, deixe só 2
// zeros

let quantidadeNotas = parseInt(prompt("Digite a quantidade de notas:"));
let soma = quantidadeNotas;
for (let i = 1; i <= quantidadeNotas; i++) {
  let nota = parseFloat(prompt("Digite a nota " + i + ":"));
  soma += soma + nota;
}
let media = soma / quantidadeNotas;
alert("A média das notas é: " + media.toFixed(5));
