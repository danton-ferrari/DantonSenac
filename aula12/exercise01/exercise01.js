// Exercício 1 (CRUD):
// Usar o sistema de decidir entre 4 opções, adicionar nome a lista,
// remover nome da lista, mostrar nomes ou modificar nome. Caso
// adicione, apenas coloque o um novo nome no final da lista, caso
// remover encontre a posição onde ele está (para isso use .indexOf()
// ), e use o comando splice para apagar este, caso tenhamos um
// mostrar, apenas escreva os valores em um alert. e caso modificar,
// escreva o nome que quer ser alterado, o index dele e oque alterar

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
      Contas - Contas[i].splice(0, 2);
      return Contas;
    }
  }
}
function mostrar(Contas) {
  var mensagem = "";
  for (var i = 0; i < Contas.length; i++) {
    for (var j = 0; j < Contas[i].length; j++) {
      mensagem += String(Contas[i][j]) + " ";
    }
    mensagem += "\n";
  }
  alert(mensagem);
}
function modificar(Contas, nome, senha) {
  var opcao = Number(
    prompt("O que deseja alterar?\n1 -> nome\n2 -> senha\n3 -> nome e senha.")
  );
  switch (opcao) {
    case 1:
      for (var i = 0; i < Contas.length; i++) {
        if (Contas[i][0] == nome) {
          Contas[i][0] = prompt("Digite o nome.");
        }
      }
      break;
    case 2:
      for (let i = 0; i < Contas.length; i++) {
        if (Contas[i][0] == nome) {
          if (Contas[i][1] == senha) {
            Contas[i][1] = prompt("Digite a senha.");
          }
        }
      }
      break;
    case 3:
      for (let i = 0; i < Contas.length; i++) {
        if (Contas[i][0] == nome) {
          Contas[i][0] = prompt("Digite o nome.");
          if (Contas[i][1] == senha) {
            Contas[i][1] = prompt("Digite a senha.");
          }
        }
      }
      break;
    default:
      alert("Número digitado incorretamente!");
      break;
  }
  return Contas;
}
// --- Finish Functions --- //

var continuar = true;

while (continuar) {
  var opcao = Number(
    prompt(
      "1 -> Adicionar nome a lista;\n2 -> Remover nome da lista;\n3 -> Mostrar nomes;\n4 -> Modificar nome."
    )
  );
  let encontrado = "";
  let senha = "";
  let nome = "";

  switch (opcao) {
    case 1:
      nome = prompt("Diga um nome");
      senha = prompt("Digite uma senha");
      encontrado = verificador(Contas, nome, senha);
      if (encontrado != true) {
        Contas.push(adicionar(nome, senha));
        console.log(Contas);
        alert(Contas);
      } else {
        console.log(`O nome ${nome} e/ou senha ${senha} já existe(m).`);
      }
      break;

    case 2:
      nome = prompt("Diga um nome");
      senha = prompt("Digite uma senha");
      encontrado = verificador(Contas, nome, senha);
      if (encontrado == true) {
        Contas = remover(Contas, nome);
      } else {
        console.log(`O nome ${nome} e/ou a senha ${senha} não existe(m).`);
      }
      alert(Contas);
      break;

    case 3:
      mostrar(Contas);
      break;

    case 4:
      nome = prompt("Diga um nome");
      senha = prompt("Digite uma senha");
      encontrado = verificador(Contas, nome, senha);
      if (encontrado == true) {
        Contas = modificar(Contas, nome, senha);
      }
      break;

    default:
      break;
  }
}
