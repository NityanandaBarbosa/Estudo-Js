/*Pelo fato de var ser considerado uma variavel global e "ignorar" os escopos
dentro do bloco numero sera sobrescrevida */
var numero = 41
{
    var numero = 66
    console.log("Valor dentro do escopo : "+numero)
}
console.log("Valor fora do escopo : "+numero)
