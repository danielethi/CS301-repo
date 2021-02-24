//Question 5
//Cal min and max heart rate range
const prompt = require("prompt-sync")();
let age = +prompt("enter your age");
let maxHeartRateRange = 220-age;
let slowestHearRate = 0.65*(maxHeartRateRange);
let fastestHeartRate = 0.85*(maxHeartRateRange);
console.log("the slowest heart rate is : "+slowestHearRate);
console.log("the fastest heart rate is: "+fastestHeartRate);