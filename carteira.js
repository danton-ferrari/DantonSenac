let sim = "s"

while (sim == "s"){
    console.log("Operações disponiveis:\nDivisão /\nMultiplicação *\nAdição +\nSubtração -")
    let operacao = prompt("Escolha uma operação")

    if (operacao == "+"){
        let x = Number(prompt("Digite um número inteiro:"))
        console.log(x)
        let y = Number(prompt("Digite mais um número inteiro:"))
        console.log(y)
        console.log(x + y)
    }

    else if (operacao == "-"){
        let x = Number(prompt("Digite um número inteiro:"))
        console.log(x)
        let y = Number(prompt("Digite mais um número inteiro:"))
        console.log(y)
        console.log(x - y)
    }

    else if (operacao == "/"){
        let x = Number(prompt("Digite um número inteiro:"))
        console.log(x)
        let y = Number(prompt("Digite mais um número inteiro:"))
        console.log(y)
        console.log(x / y)
    }

    else if (operacao == "*"){
        let x = Number(prompt("Digite um número inteiro:"))
        console.log(x)
        let y = Number(prompt("Digite mais um número inteiro:"))
        console.log(y)
        console.log(x * y)
    }
    
    sim = prompt("Deseja continuar? (s/n)")

}

console.log("Acabou!")