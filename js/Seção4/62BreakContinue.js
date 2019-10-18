let num = [1,2,3,4,5,6,7,8,9,10]

for(i in num){
    if(num[i] == 5){
        break
    }else{
        console.log(num[i])
    }
}
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
for(i in num){
    if(num[i] == 5){
        continue
    }else{
        console.log(num[i])
    }
}
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")

externo : 
for(i= 0; i < 10; i++){
    for(let j =0; j < 4 ; j++){
        if( j == 2 && i == 2) break externo
            console.log(`${i} ${j}`)
    }
}