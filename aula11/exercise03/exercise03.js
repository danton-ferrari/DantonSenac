// Exercício 3: relembrando a primeira aula, faça um jogo de múltipla
// escolha que contenham uma história, se quiser usar funções para
// separar as perguntas sinta-se livre.

// --- Start Functions --- //
function a(nome) {
  console.log(`${nome}, você mora a 30min de carro e, está a pé. Cagou-se...`);
}
function b(nome) {
  console.log(`${nome}, você mora a 30min de carro e, está a pé. Cagou-se...`);
}
function c(nome) {
  console.log(`${nome}, você mora a 30min de carro e, está a pé. Cagou-se...`);
}
// --- Finish Functions --- //
var continuar = true;
while (continuar) {
  let nome = prompt("Qual o seu nome?");
  let variavel = `${nome} você está indo para casa de um amigo, mas precisa ir ao banheiro\no que faze?\na - voltar para casa\nb - seguir em frente\nc - procurar um estabelecimento`;
  let decisao = prompt(variavel);
  switch (decisao) {
    case "a":
      a(nome);
      break;
    case "b":
      b(nome);
      break;
    case "c":
      c(nome);
      break;
    default:
      console.log(nome, ", valor invalido, digite novamente.");
      break;
  }
  continuar = prompt("Deseja continuar a jogar? (s/n)");
  switch (continuar) {
    case "n":
      continuar = false;
      break;
    default:
      break;
  }
}
