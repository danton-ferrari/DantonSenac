let sim = "s"

while (sim == "s"){
    console.log("Operações disponiveis:\nDivisão /\nMultiplicação *\nAdição +\nSubtração -")
    let operacao = prompt("Escolha uma operação")

    if (operacao == "+"){
        let x = Number(prompt("Digite um número inteiro:"))
        console.log(x)
        let y = Number(prompt("Digite mais um número inteiro:"))
        console.log(y)
        if (x > 0 && y > 0){
            console.log(x+" + "+y+" =",x + y)
            sim = prompt("Deseja continuar? (s/n)")
        }
        else {
            console.log("Digite um numero maior que \"0\"!\nTente novamente.")
        }
    }

    else if (operacao == "-"){
        let x = Number(prompt("Digite um número inteiro:"))
        console.log(x)
        let y = Number(prompt("Digite mais um número inteiro:"))
        console.log(y)
        if (x > 0 && y > 0){
            console.log(x+" - "+y+" =",x - y)
            sim = prompt("Deseja continuar? (s/n)")
        }
        else {
            console.log("Digite um numero maior que \"0\"!\nTente novamente.")
        }
    }

    else if (operacao == "/"){
        let x = Number(prompt("Digite um número inteiro:"))
        console.log(x)
        let y = Number(prompt("Digite mais um número inteiro:"))
        console.log(y)
        if (x > 0 && y > 0){
            console.log(x+" / "+y+" =",x / y)
            sim = prompt("Deseja continuar? (s/n)")
        }
        else {
            console.log("Digite um numero maior que \"0\"!\nTente novamente.")
        }
    }

    else if (operacao == "*"){
        let x = Number(prompt("Digite um número inteiro:"))
        console.log(x)
        let y = Number(prompt("Digite mais um número inteiro:"))
        console.log(y)
        if (x > 0 && y > 0){
            console.log(x+" * "+y+" =",x * y)
            sim = prompt("Deseja continuar? (s/n)")
        }
        else {
            console.log("Digite um numero maior que \"0\"!\nTente novamente.")
        }
    }
}

console.log("Obrigado por usar \"Calculadora Danton\".")