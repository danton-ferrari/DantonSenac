let nome = prompt("Qual o seu nome?");
let idade = 0;

if (nome == "Maria") {
  console.log("Pod seguir em frente!");
  idade = Number(prompt("Qual sua idade?"));
  if (idade >= 18) {
    console.log("Pode seguir em frente!");
  } else {
    console.log(`${nome} você tem ${idade} anos de idade.`);
  }
} else {
  console.log(nome);
}
