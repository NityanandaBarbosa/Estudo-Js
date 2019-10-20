//12. Transforme a seguinte operação ternária em uma instrução if.
let a = 3
let b = 4

const value = (a,b) => a ? b ? 1 : -1 : 0

console.log(value(3,4))

/* if(a){
    if(b){
        return 1
    }else{
        return -1
    }
}else{
    return 0
}*/