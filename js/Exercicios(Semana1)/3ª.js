/* 3. Dado o array [5, 6, 10, 4, 3, 7, 1], mostre os valores que são maiores do que
a média aritmética usando as funções reduce e filter. */
const array = [5, 6, 10, 4, 3, 7, 1]

let soma = array.reduce( (valorAnterior, array) => valorAnterior + array, 0 )
let media = soma/array.length

let arrayFiltrado = array.filter(array => array > media);
console.log(arrayFiltrado)


