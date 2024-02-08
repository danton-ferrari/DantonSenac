// Então programador, era para que apenas permita que a pessoa
// possa passar se a idade mínima for 18, mas tá dando muito errado.

let idadeMinima = 10;
let idade = parseInt(prompt("Digite sua idade:"));
if (idade <= idadeMinima) {
  alert("Você tem permissão para entrar!");
} else {
  alert("Você não tem idade suficiente para entrar!");
}
