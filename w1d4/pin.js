
//Question 3 
const prompt = require('prompt-sync')();
const pin = +prompt("insert pin: ");
let accountPin=578;

if(accountPin===pin){
    console.log("Correct,welcome back.")
   
}else if(accountPin!==pin){

    console.log("Incorrect,try again.");
    +prompt("insert pin: ");
    if(accountPin===pin){
        console.log("Correct,welcome back.")
    
    }
    if(accountPin!==pin){
    console.log("Incorrect,try again.");
    +prompt("insert pin: ");
    }
    if(accountPin===pin){
        console.log("Correct,welcome back.")
    
    }else{
    console.log("Sorry you have been locked out");
}
}

