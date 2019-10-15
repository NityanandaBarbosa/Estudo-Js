console.log(typeof console, typeof log)

const obj1 = {}
obj1.nome = "Bola" // obj1['nome'] = "Bola"

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log("Testing .....")
    }
}

const obj2 = new Obj("Mesa")
const obj3 = new Obj("Cadeira") 

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()