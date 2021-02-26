const prompt = require('prompt-sync')();
let num = +prompt("insert a number: ");
let str = num.toString();

let sum=0;
for(let i=0;i<str.length;i++){
    let value = parseInt(str[i]);
    sum=sum+str[i];
}
console.log(sum);
