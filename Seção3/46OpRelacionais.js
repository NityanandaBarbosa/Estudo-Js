console.log(`1º - ${'1'==1}`)
console.log(`2º - ${'1'===1}`) // '===' é uma condição estrita, vê se os dados tbm são do mesmo tipo
console.log(`3º - ${'3'!=3}`)
console.log(`4º - ${'3'!==3}`)// '!=='estritamente diferente

console.log(`5º - ${4==1}`)
console.log(`6º - ${1 >= 4}`)
console.log(`7º - ${1 <= 4}`)

const d1 = new Date(0)
const d2 = new Date(0)
console.log(`8º - ${d1 === d2}`)
console.log(`9º - ${d1 == d2}`)
console.log(`10º - ${d1.getTime() == d2.getTime()}`)
