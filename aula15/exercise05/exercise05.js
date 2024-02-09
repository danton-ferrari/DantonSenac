// Imagine que você está sendo pago para uma série de interfaces que recebem os valores
// de máquinas e diga o que fazer em relação a cada conjunto de variáveis.

while (true) {
  var temperaturaA = Math.floor(Math.random() * 180) + 20;
  var pressaoA = Math.floor(Math.random() * 100);
  var aguaA = Math.floor(Math.random() * 100);
  var mensagem = "";
  var temperatura = prompt(
    `Temperatura: ${temperaturaA}°C padrão aleatórtia\n deseja mudar?`
  );
  temperatura == "" ? (temperatura = temperaturaA) : true;
  var pressao = prompt(
    `Pressão: ${pressaoA}% padrão aleatórtia\n deseja mudar?`
  );
  pressao == "" ? (pressao = pressaoA) : true;
  var agua = prompt(
    `Nível da água em: ${aguaA}% padrão aleatórtia\n deseja mudar?`
  );
  agua == "" ? (agua = aguaA) : true;
  //ALTERAR AQUI ABAIXO
  if (temperatura > 120 && agua < 30) {
    mensagem += "aumante os nívei de água\n";
  }
  if (temperatura > 120 && pressao < 30 && agua > 50) {
    mensagem = "aumente a pressão\n";
  } else if (temperatura < 120 && pressao > 70) {
    mensagem = "diminua a pressão";
  }
  //Até aqui
  alert(
    `Agua${agua} + pressão${pressao} + temperatura${temperatura}` + mensagem
  );
}
// Exercício 5:
// Troque os ifs para apenas ter os seguintes parâmetros:
// 1-
// ● Se a pressão for menor que 30, temperatura maior que 150, e
// nível de água abaixo de 40%, escreva em mensagem “aumente
// os níveis de água e aumente a pressão”.
// ● Se tiver temperatura menor que 100 e pressão maior que 60, a
// mensagem “reduzir a pressão”.
// ● Independentemente, se nível da água for menor que 20,
// mensagem “urgentemente aumente níveis de água”
// 2-
// ● Se a temperatura for maior que 100 e pressão menor que 30,
// aumente a pressão.
// ● Se a pressão estiver acima de 80 e nivel de água estiver menor
// que 40, aumente o nível da água.
// ● Se temperatura estiver acima de 190, desligar a máquina.

var temperaturaA = Math.floor(Math.random() * 180) + 20;
var pressaoA = Math.floor(Math.random() * 100);
var aguaA = Math.floor(Math.random() * 100);
var dt = 0.001;
var da = 0.001;
var temperatura =
  prompt(`Temperatura: ${temperaturaA}°C padrão aleatórtia\n deseja
mudar?`);
temperatura == "" ? (temperatura = temperaturaA) : true;
var pressao = prompt(`Pressão: ${pressaoA}% padrão aleatórtia\n deseja mudar?`);
pressao == "" ? (pressao = pressaoA) : true;
var agua = prompt(
  `Nível da água em: ${aguaA}% padrão aleatórtia\n deseja mudar?`
);
agua == "" ? (agua = aguaA) : true;
while (true) {
  var mensagem = "";
  temperatura = temperatura / (1 + dt * pressao);
  agua = agua / (1 + da * pressao);
  //ALTERAR AQUI ABAIXO
  if (temperatura > 120 && agua < 30) {
    mensagem += "aumante os nívei de água\n";
  }
  if (temperatura > 120 && pressao < 30 && agua > 50) {
    mensagem = "aumente a pressão\n";
  } else if (temperatura < 120 && pressao > 70) {
    mensagem = "diminua a pressão";
  }
  //Até aqui
  alert(
    `Agua${agua.toFixed(2)} + pressão${pressao} +
temperatura${temperatura.toFixed(2)}\n\n` + mensagem
  );
}
