//5. Retorne todas as notas do aluno do objeto abaixo utilizando a forma declarativa.

const aluno = {
    nome: 'iago',
    notas: [
        { nome: 'fisica', valor: 5 },
        { nome: 'estatistica', valor: 4 },
        { nome: 'probabilidade', valor: 1 }]
    }
let notas = aluno.notas.map(notas => notas.valor);
console.log(notas) 

