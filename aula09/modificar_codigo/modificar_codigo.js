// Exercício 3- Modificar código:
// Com base no acima, crie uma lista para outro dado que o usuário
// possa inserir, como email ou CPF.
// Exercício 3.2- Faça com que ele possa usar tanto o nome quando
// esse outro dado para logar.
// Exercício 3.3- Faça com que ele possa tentar mais de uma vez por a
// senha, se ele errar 5 vezes ele para.

let usuarios = ["Anderson", "Julia", "Alister"];
let senhas = ["123", "meu nome e julha", "senh4 fort3"];
while (true) {
let novoUsuario = prompt("Insira um novo nome de usuário (ou 'sair'
para encerrar):");
if (novoUsuario.toLowerCase() == "sair") {
break;
}
if (usuarios.indexOf(novoUsuario) == -1) {
let novaSenha = prompt("Insira a senha correspondente:");
usuarios.push(novoUsuario);
senhas.push(novaSenha);
alert(`Usuário "${novoUsuario}" cadastrado com sucesso.`);
} else {
alert(`Erro: O nome de usuário "${novoUsuario}" já está em uso.
Escolha outro.`);
}
}
let usuarioLogin = prompt("usuário:");
let senhaLogin = prompt("senha:");
let indiceUsuario = usuarios.indexOf(usuarioLogin);
if (indiceUsuario != -1 && senhas[indiceUsuario] == senhaLogin) {
alert(`Login bem-sucedido para o usuário "${usuarioLogin}".`);
} else {
alert("Erro: Nome de usuário ou senha incorretos.");
}
console.log(usuarios)