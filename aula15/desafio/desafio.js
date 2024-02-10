// Desafio: Agora ao invés de escrever o que tem que acontecer, altere os dados
// de fato.
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
