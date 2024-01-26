let nome_usuario = "";
let senha = "";
while (nome_usuario == "") {
  nome_usuario = prompt("Digite seu nome:");
  if (nome_usuario.length > 4) {
    while (senha == "") {
      senha = prompt("Digite uma senha:");
      if (senha.length < 6) {
        senha = "";
      }
    }
  } else {
    nome_usuario = "";
  }
}
let nome_usuario2 = prompt("Digite seu nome de usuário:");
let senha2 = prompt("Digite sua senha:");
if (nome_usuario2 == nome_usuario && senha == senha2) {
  console.log("Acesso permitido!");
}
