let dinheiro = 1000
let numero_aleatorio = Math.floor(Math.random() * 10) + 1
let numero_aposta = Number(prompt('Escolha um número de 1 a 10 para apostar:'))
let dinheiro_apostado = Number(prompt('Escolha quanto quer apostar:'))

if (numero_aposta == numero_aleatorio) {
    dinheiro = dinheiro + dinheiro_apostado
    alert(`Você ganhou R$${dinheiro_apostado}, agora você tem R$${dinheiro}`)
}
else {
    dinheiro = dinheiro - dinheiro_apostado
    alert(`Você perdeu R$${dinheiro_apostado}, agora você tem R$${dinheiro}`)
}