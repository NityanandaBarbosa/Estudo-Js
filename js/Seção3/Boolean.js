let check = false
console.log(check)

check = true
console.log(check)
console.log()

console.log("São verdadeiros !")
console.log(!!1)
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"Qualquer coisas")
console.log(!![])
console.log(!!{})
console.log(!!Infinity+"\n")

console.log("São falsos !")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined+"\n")

console.log("Algo a mais !")
console.log('' || null || "Lucas")

let nome = 'Nity'
console.log(nome||"Vazio")
nome = ''
console.log(nome||"Vazio")