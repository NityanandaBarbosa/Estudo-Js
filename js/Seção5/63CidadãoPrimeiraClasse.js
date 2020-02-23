function fun1(){ } //Forma literal

const fun2 = function () {} //Armazenada em um variavel

const array = [function(a,b) {return a + b}, fun1, fun2] //Armazenada em um array
console.log(array[0](4,5))

const obj = {}//Armazenando função em um objeto
obj.falar = function () {return "Opa !!"}
console.log(obj.falar())

function run(fun){ //Passando função como parametro
    fun()
}

run(function () {console.log("Executando ....")})

function soma(a,b){//função como retorno
    return function(c){
        console.log(a + b + c)
    }
}

soma(11,25)(1)