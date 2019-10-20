const fisica = {

    nome: 'Física',
    alunos: ['Iago', 'João'],
    localizacao: {
        bloco: 3,
        sala: 4
    }
}

const {localizacao : {sala} } = fisica
console.log(sala)