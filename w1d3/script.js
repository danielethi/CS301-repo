//question 1

const prompt = require('prompt-sync')();
let wheather = prompt("choose wheather type: ");
let footwhear;
if(wheather==="hot"){
    footwhear=sandals;
}else if(wheather==="rain"){
   footwhear="galoshes";
}else if(wheather==="snow"){
    footwhear="boots";
}else{
    footwhear="sneaker";
}
console.log(footwhear);