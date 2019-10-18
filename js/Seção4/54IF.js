Aluno1 = {
    nome : "Pedro",
    nota : 7
}
Aluno2 = {
    nome : "Maria",
    nota : 6
}


function AlunoStatus (Aluno){
    if(Aluno.nota >= 7){
        console.log("Aprovado com nota : " + Aluno.nota)
    }else{
        console.log("Reprovado com nota : " + Aluno.nota)
    }
}

AlunoStatus(Aluno1)
AlunoStatus(Aluno2)

function seForVerdade(valor){
    if(valor){
        console.log("É verdade : " + valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade("")
seForVerdade({})
seForVerdade(5)