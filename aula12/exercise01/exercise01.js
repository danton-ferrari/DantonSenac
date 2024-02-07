// Exercício 1 (CRUD):
// Usar o sistema de decidir entre 4 opções, adicionar nome a lista,
// remover nome da lista, mostrar nomes ou modificar nome. Caso
// adicione, apenas coloque o um novo nome no final da lista, caso
// remover encontre a posição onde ele está (para isso use .indexOf()
// ), e use o comando splice para apagar este, caso tenhamos um
// mostrar, apenas escreva os valores em um alert. e caso modificar,
// escreva o nome que quer ser alterado, o index dele e oque alterar
contas[2].splice(0, 1);
// --- Contas --- //
let Contas = [
  ["Mario", "123", 99],
  ["Alfredo", "senha incrivel", 10000],
  ["Anderson", "acorda santacruz", 2000],
  ["Beatriz", "321", 53000],
];
// --- Contas --- //

// --- Start Functions --- //
function verificador(contas, nome, senha) {
  for (let i = 0; i < contas.length; i++) {
    if (contas[i][0] == nome) {
      if (contas[i][1] == senha) {
        return true;
      }
    }
  }
  return false;
}

function adicionar(nome, senha) {
  var temp = [nome, senha];
  return temp;
}
function remover(Contas, nome) {
  for (var i = 0; i < Contas.length; i++) {
    if (Contas[i][0] == nome) {
      return Contas[i].splice(0, 2);
    }
  }
}
function mostrar() {}
function modificar() {}
// --- Finish Functions --- //

var continuar = true;

while (continuar) {
  var opcao = Number(
    prompt(
      "1 -> Adicionar nome a lista;\n2 -> Remover nome da lista;\n3 -> Mostrar nomes;\n4 -> Modificar nome."
    )
  );
  let nome = prompt("Diga um nome");
  let senha = prompt("Digite uma senha");
  let encontrado = verificador(Contas, nome, senha);
  console.log(encontrado);

  switch (opcao) {
    case 1:
      if (encontrado != true) {
        Contas.push(adicionar(nome, senha));
        console.log(Contas);
        alert(Contas);
      } else {
        console.log(`O nome ${nome} e/ou senha ${senha} já existe(m).`);
      }
      break;

    case 2:
      if (encontrado != true) {
        Contas = remover(Contas, nome);
      }
      break;

    case 3:
      break;

    case 4:
      break;

    default:
      break;
  }
}
