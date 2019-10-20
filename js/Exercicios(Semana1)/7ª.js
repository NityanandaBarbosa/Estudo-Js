/* 7. Dado a função abaixo, inclua um código que sempre exiba uma mensagem, com ou
sem exceção, após a linha do return. */
/* function try_catch() {
    try {
        if (Math.random() > 0.3)
            throw new Error()
            return
    } catch (e) {
    }
} */

function try_catch() {
    try {
        if (Math.random() > 0.3) {
            throw new Error()
            return
        }
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Mensagem")
    }
}
try_catch()
    