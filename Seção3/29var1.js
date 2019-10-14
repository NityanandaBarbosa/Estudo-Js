//Uma variavel var pode ser vista fora do seu escopo.
{
    {
        {
            {
                {
                    var nome = "Guilherme"
                }
            }
        }
    }
}
console.log(nome)

//Já uma variavel var dentro de uma função não é vista fora de seu escopo(função)
function newName(){
    var nomeNew = "Péricles"
}
newName()
console.log(nomeNew)