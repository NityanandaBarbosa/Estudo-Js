/* 13. Implemente o getter e o setter em um objeto para o atributo temp, em que não permita
que o valor seja negativo lançando uma exceção. O nome das funções getter e setter
devem ser temperatura. */

const obj = {
    temp: 0,
    set Temperatura(valor){
        try{
            if(valor < 0){
                throw new exception("Error")
            }else{
            this.temp = valor
            }
        }catch(e){
            console.log("temperatura invalida")
        }
    },
    get Temperatura(){
        console.log(`Temperatura atual é de ${this.temp}ºC`)
    }
}
obj.Temperatura =-50
obj.Temperatura
