const pessoa = {
    nome : "Pedro",
    idade : 32,
    peso : 90,
    endereco : {
        logradouro : "Rua Chiquin da Silva",
        numero : 32
    }

}
const {nome,idade} = pessoa
console.log(nome,idade)

const {nome : n,idade : i} = pessoa
console.log(n,i)

const {sobrenome = "Ferreira" , cidade = "Maranguape"} = pessoa
console.log(sobrenome, cidade)