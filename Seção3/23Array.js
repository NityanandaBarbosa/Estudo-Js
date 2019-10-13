//Aula 23
const valores = [1,2,3,4,5]

console.log("Imprimindo primeira e quinta posição do array : " + valores[0] +"/"+ valores[4])
valores.push(3)
console.log(valores)
valores.pop()
console.log("Tamanho do array : " + valores.length)
console.log(valores)

delete valores[2]
console.log(`${valores}
tipo de dado é uma array : ${typeof valores}`)
