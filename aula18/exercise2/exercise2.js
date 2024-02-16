// Exercício 2:
// Sabendo agora como o throw funciona, pergunte para o usuário em um prompt se ele
// deseja a opção número 1 ou a opção número 2, qualquer outro caso mande o erro,
// “resposta inválida”.

var opcao = Number(prompt("Digite 1 ou 2:"));
try {
  if (opcao != 1 || opcao != 2) {
    throw new Error("Valor inválido!");
  }
} catch (error) {
  console.log(error.message);
}
