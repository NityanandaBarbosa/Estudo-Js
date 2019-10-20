/* 9.Dado o objeto abaixo, declare uma função saudacaoMaria que utilizando o método
saudacao do objeto joao imprima Olá Maria. */

const joao = {
    nome: 'João',
    saudacao() {
        console.log(`Olá ${this.nome}`)
    }
}

function saudacaoMaria(object){
    object.nome = "maria"
    object.saudacao()
}

saudacaoMaria(joao)