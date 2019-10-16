var vetor = []

for(var i=0; i<10; i++){
    vetor.push(function(){
        console.log(i)
    })
}
vetor[2]()
vetor[8]()