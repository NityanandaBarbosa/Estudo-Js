let valor //variavel não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)

const pessoa = {}
console.log(pessoa.curso)
console.log(pessoa)

pessoa.curso = "Ciência da Computação"
console.log(pessoa)

pessoa.curso = undefined //evitar atribuir o undefined
console.log(!!pessoa.curso)
//delete pessoa.curso
console.log(pessoa)

pessoa.curso = null //Sem curso
console.log(pessoa)