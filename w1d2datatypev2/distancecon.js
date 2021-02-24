//Question 2
//convert distance in killometers to miles
const prompt = require('prompt-sync')();
let distanceInKillometer = +prompt("please enter distance in killometer: ");
let distanceInMile = distanceInKillometer*0.621371;
console.log("The distance in mile is: "+distanceInMile);