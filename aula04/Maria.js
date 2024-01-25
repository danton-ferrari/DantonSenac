let nome = prompt("Qual o seu nome?");
let idade = Number(prompt("Qual sua idade?"));

if (nome == "Maria" && idade >= 18) {
  console.log("Pod seguir em frente!");
} else if (idade >= 21) {
  console.log("Pode seguir em frente!");
} else {
  console.log(`${nome} você tem ${idade} anos de idade.`);
}
