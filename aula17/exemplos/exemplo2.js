// Exemplo de encontrar se tem propriedade:
let carro1 = {
  marca: "Tesla",
  modelo: "Model S",
  ano: 2022,
  tipo: "elétrico",
};
let carro2 = {
  marca: "Ford",
  modelo: "Mustang",
  ano: 2021,
  tipo: "gasolina",
};
let carro3 = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2020,
};
let veiculos = [carro1, carro2, carro3];
let propriedade = "tipo";
let veiculosComPropriedade = [];
for (let veiculo of veiculos) {
  if (veiculo.hasOwnProperty(propriedade)) {
    veiculosComPropriedade.push(veiculo);
  }
}
console.log(veiculosComPropriedade);
