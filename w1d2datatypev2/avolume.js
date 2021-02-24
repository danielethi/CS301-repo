//Question 1
//convert volume in quarts to volume in litters using js
const prompt = require('prompt-sync')();
let volumeInQuarts = +prompt('enter volume in quarts: ');
let volumeInLitters= volumeInQuarts*0.946;
console.log("the volume in litters is: "+volumeInLitters);

