function AlunoStatus (nota){
    if(nota >= 7){
        console.log("Aprovado !!")
    }else{
        console.log("Reprovado !!")
    }
}

AlunoStatus(5)
AlunoStatus(7)
AlunoStatus("Pedro")