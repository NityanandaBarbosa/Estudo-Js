/* Diferentemente do var, let sofre com os escopos 
   ou seja uma variavel declarada dentro de um escopo n pode ser vista fora*/
let numero = 41
{
    let numero = 66
    console.log("Valor dentro do escopo : "+numero)
}
console.log("Valor fora do escopo : "+numero)
