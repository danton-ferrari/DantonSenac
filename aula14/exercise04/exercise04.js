// No código a seguir, ele deveria pegar o nome e a senha, assim
// então dizer quando ela está certa ou não.
// Mas parece que ele não aceita nada!!!

let usuarios = [
  ["Alice", "123"],
  ["Bernardo", "abobora"],
  ["Carol", "senha da carol"],
  "Murilo",
  "senha",
];
let nome = Number(prompt("Digite o nome:"));
let senha = prompt("Digite a senha:");
let acessoPermitido = false;
for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i][0] == nome && usuarios[1][1] == senha) {
    acessoPermitido = true;
    break;
  }
}
if (acessoPermitido) {
  alert("Acesso permitido!");
} else {
  alert("Acesso negado!");
}
