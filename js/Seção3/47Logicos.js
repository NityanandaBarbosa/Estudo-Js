function compras(trab1, trab2){
    const compraSorvete = trab1 || trab2
    const compraTv50 = trab2 && trab1
    const compraTv32 = trab1 != trab2
    const manterSauldavel = !compraSorvete

    return   {compraSorvete, compraTv32, compraTv50, manterSauldavel}
}
console.log(compras(true, false))