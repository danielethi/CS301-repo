
//Question 1
//check wheather a given number is prime or not based it number of factors
const prompt = require('prompt-sync')();
let input = prompt("enter a number: ");
let factorCount=0;
 let isPrime=true;

let factors;
for(let i=0;i<=input;i++){
    if(input%i===0){
       factors=i;
       factorCount=factorCount+1
       //console.log(factors);
     
    }

}
console.log("the numbers of factors of: "+input+" "+"is"+" "+factorCount);
if(factorCount==2){
    isPrime=true;
}else{
    isPrime=false;
}
console.log("is input prime?  "+isPrime);