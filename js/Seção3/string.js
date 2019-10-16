const nome = "Nityananda"

console.log("Letra : " + nome.charAt(0)) //mostra o caractere de uma posição
console.log("Letra : " + nome.charAt(12)) //Quando o carectere escolhido está fora do range a saida é nada
console.log("Letra (" +nome.charAt(1) +") no código UTF-16 : " + nome.charCodeAt(1))
console.log(nome.indexOf('y'))//Da o indice de uma letra

console.log(nome.substring(4)) //
console.log(nome.substring(0,4))

console.log(nome.concat(" Barbosa"))
console.log("nome".replace('e', 'o'))
console.log(nome.replace('a', 'o'))

console.log('Maria,José,Pedro'.split(','))
