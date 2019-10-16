//par nome/valor
const saudacao = "Opa eae veiiiii, blz!?" //contexto léxico 1

function exec(){
    const saudacao = "Fala tu pivete" //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome : "Pedro",
    idade : 32,
    peso : 90,
    endereco : {
        logradouro : "Rua Chiquin da Silva",
        numero : 32
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)