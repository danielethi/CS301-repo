function checkPrime(num){
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    
    }
    return true;
 }
 console.log(checkPrime(11))