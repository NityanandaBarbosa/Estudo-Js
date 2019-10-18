const notas = [6.8, 9.9, 5.8, 7.1]

for(let i in notas){
    console.log(`A nota na posição ${i} do vetor é ${notas[i]}`)
}
console.log()

const Pessoa = {
    nome : "Leandro",
    idade : 20,
    peso : 40,
    trabalho : "Programador"
}
for(let atributo in Pessoa){
    console.log(`${atributo} : ${Pessoa[atributo]}`)
}