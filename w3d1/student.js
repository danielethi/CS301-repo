//question 2
const prompt = require('prompt-sync')();
let studentName = prompt("please type your name: ");
let credits = +prompt('enter completed credits: ');
let label;
if(0<credits<30){
    label="Freshman";
}else if(30<=credits<60){
    label="Sophomore";
}else if(60<=credits<90){
    label="junior";
}else{
    label="senior";
}
console.log("the student name and label is: "+" "+studentName+abel);

