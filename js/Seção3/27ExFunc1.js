//Função sem retorno
function imprimirSoma(a=0,b=0){
    console.log(a+b)
}
imprimirSoma(2,64)

//Função com retorno
function soma(a=0,b=0){
    return a+b
}

let resultaSoma = soma(2,3)
console.log(resultaSoma)