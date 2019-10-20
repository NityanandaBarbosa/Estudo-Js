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