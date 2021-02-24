//Question 3
//Uses of the plus operator 
const prompt = require('prompt-sync')();
let a = +prompt("First number?");
console.log(a);
/*
Answer
 this + operator in prompt is used to allow inserting only  int values in the prompt
 otherwise anyone can type string value and will output the string 
  
 but if the plus sign is used it will output NaN when a none number value is typed

 */