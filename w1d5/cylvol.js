//compute volume of a cylinder using javascript
const prompt = require('prompt-sync')();
let r= prompt("please enter the raidus of the circle: ");

function areaOfCircle(r){
    return  3.14*Math.pow(r,2)*5;
 
}


console.log("the are of the circle is: "+areaOfCircle(r));