//Parametros e retornos são opcionais

function area(altura, largura){
    const area = altura*largura
    if(area > 1000){
        console.log(`Valor acima do permitido,${area}m2`)
    }else{
        return area
    }
}

console.log(area(50,30))
console.log(area(50,10))
console.log(area())
console.log(area(18,10,45,123,454))