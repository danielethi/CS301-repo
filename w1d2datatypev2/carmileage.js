//quesion 4
//calculate mileage of a vehicle 
const prompt = require("prompt-sync")();
let  startingOdometer = +prompt("enter the starting ordometer reading: ");
let  endingOdemeter = +prompt("enter the starting ordometer reading: ");
let  totalMileage = (endingOdemeter-startingOdometer);
console.log("The total mileage is: "+totalMileage);
let  totalGasUsed = +prompt("enter the number of gallons of gas used: ");
let  mileageInMilesPerGallon = parseFloat(totalGasUsed/totalMileage);
console.log("the mileage in miles per galloon is : " + mileageInMilesPerGallon);