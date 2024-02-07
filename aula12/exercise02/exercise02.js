// Exercício 2:
// Parte 1- Faça com que no código acima, caso retornar verdadeiro,
// ele abra uma tela contendo a frase, "Conta acessada com
// sucesso", caso ele retorne falso repita o processo e escreva
// "Conta invélida".
// Parte 2 - Agora ao invéz de aparecer a frase de conta acessada,
// chame uma função, esta deve conter em um prompt os dados do
// seu usuário, e opções de ação, como adicionar dinheiro, retirar
// dinheiro, e sair da conta.
// Parte 2.2- Para adicionar basta fazer uma soma do valor que ele
// possui com o que quer adicionar, e retirar basta remover o dinheiro
// que for pedido.
// Parte 3- Se o valor removido for maior do que a pessoa tem, por
// exemplo, temos 99 em conta e a pessoa resolver retirar 100, ao
// invez de fazer a operação mostre uma mensagem de saldo
// insuficiente.

let Contas = [
  ["Mario", "123", 99],
  ["Alfredo", "senha incrivel", 10000],
  ["Anderson", "acorda santacruz", 2000],
  ["Beatriz", "321", 53000],
];
function nomePorSenha(contas, nome, senha) {
  for (let i = 0; i < contas.length; i++) {
    if (contas[i][0] == nome) {
      if (contas[i][1] == senha) {
        return true;
      }
    }
  }
  return false;
}
function encontrado_true(Contas, nome) {
  for (var i = 0; i < Contas.length; i++) {
    if (Contas[i][0] == nome) {
      alert(Contas[i].join(" "));
      var opcao = Number(
        prompt("1 -> Adicionar dinheiro\n2 -> Retirar dinheiro\n3 -> Sair")
      );
      switch (opcao) {
        case 1:
          var valor = Number(prompt("Digite quanto deseja adicionar:"));
          Contas[i][2] += valor;
          alert(Contas[i].join(" "));
          break;
        case 2:
          var valor = Number(prompt("Digite quanto deseja retirar:"));
          if (Contas[i][2] >= valor) {
            Contas[i][2] -= valor;
            alert(Contas[i].join(" "));
          } else {
            alert(
              `${nome}, você não tem dinheiro suficiente para esta operação!`
            );
          }
          break;
        case 3:
          break;
      }
    }
  }
  return Contas;
}
let nome = prompt("Diga um nome");
let senhaProcurada = prompt("Digite uma senha");
let encontrado = nomePorSenha(Contas, nome, senhaProcurada);
switch (encontrado) {
  case true:
    Contas = encontrado_true(Contas, nome);
    break;
  case false:
    alert("Conta inválida");
    break;
}
