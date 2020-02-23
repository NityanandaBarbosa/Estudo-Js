//Estrategia 1 para gerar um valor padrao
function soma(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c  
}

console.log(soma(), soma(1), soma(2, 3, 6), soma(0, 0, 0))

function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN() ? 1 : c
    
    return a + b + c
}

console.log(soma2(), soma2(1), soma2(2, 3, 6), soma2(0, 0, 0))

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(1), soma3(2, 3, 6), soma3(0, 0, 0))