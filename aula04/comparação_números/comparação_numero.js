let numero = Number(prompt("Digite um número"));
if (numero > 5) {
  console.log(numero);
} else if (numero == 5) {
  console.log(`${numero} é o valor mínimo para aprovar!`);
} else {
  console.log(`${numero} é um valor muito baixo!`);
  console.log("Console se autodestruirá em 10 segundos...");
}
