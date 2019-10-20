/*4. Usando destructuring, declare uma variável sala com o valor da sala do seguinte ob-
jeto. */

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