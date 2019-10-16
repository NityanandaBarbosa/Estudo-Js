function tratarErroELancar(erro){
    throw new Error('....')
    //throw 10
    //throw  "Error ..."
}

function ImprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    }finally{
        console.log('finalmente')
    }
}

const obj = {nome : "Lucas"} 
ImprimirNomeGritado(obj)