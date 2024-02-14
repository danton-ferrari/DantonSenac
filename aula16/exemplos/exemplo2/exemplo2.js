class Carro {
  constructor(marca, modelo, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.velocidade = 0;
    this.ligado = false;
  }
  ligar() {
    this.ligado = true;
    console.log("O carro está ligado.");
  }
  desligar() {
    this.ligado = false;
    console.log("O carro está desligado.");
  }
  acelerar() {
    if (this.ligado) {
      this.velocidade += 10;
      console.log("Acelerando. Velocidade atual: " + this.velocidade + " km/h");
    } else {
      console.log("Não é possível acelerar. O carro está desligado.");
    }
  }
  frear() {
    if (this.velocidade > 0) {
      this.velocidade -= 10;
      console.log("Freando. Velocidade atual: " + this.velocidade + " km/h");
    } else {
      console.log("O carro já está parado.");
    }
  }
}
let carro1 = new Carro("Chevrolet", "Onix", "Prata");
let carro2 = new Carro("Volkswagen", "Gol", "Branco");
let carro3 = new Carro("Fiat", "Uno", "Vermelho");
let carro4 = new Carro("Toyota", "Corolla", "Preto");
let carro5 = new Carro("Honda", "Civic", "Azul");
carro1.ligar();
