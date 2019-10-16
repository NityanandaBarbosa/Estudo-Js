//Armazenando função em uma variavel
const imprimirSoma = function(a,b){
    console.log(a+b)
}
imprimirSoma(5, 7.7)

//Armazenando uma função arrow em uma variavel
const soma = (a,b) => {
    return a+b
}
let resultSoma = soma(35, -5)
console.log(resultSoma)

//retorno implicito
const subtracao = (a,b) => a-b
let resultSub = subtracao(55, 44)
console.log(resultSub)