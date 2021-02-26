
//q2 find factorial of a give number using loop
const prompt = require('prompt-sync')();
let num = prompt("enter a number: ");
let result=1;
for(let i=0;i<num;i++){
    result=result*(num-i);
   
}
console.log(result);

