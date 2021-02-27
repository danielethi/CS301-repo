//cal the volume of a house by taking user inputs

const prompt = require('prompt-sync')();
let houseWidth= prompt("please enter the width of the house: ");
let houseDepth=prompt("please enter the depth of the house: ");
let houseHeight = prompt("please enter the height of the house: ");

function houseVolume(){
   return livingVolume*roofVolume;
}
function livingVolume(){
    return houseWidth*houseHeight*houseDepth;
 }
function roofVolume(){
    return triangelArea*houseDepth;
}
function triangelArea(){
    let s=(a+b+c)/2;
    return Math.sqrt(s*(s-b)*s-c);
}
