//Question 3
//calc the number of boxes in each stack from the total number of boxes

const prompt = require("prompt-sync")();
let totalNumberOfBoxes = +prompt("enter the total number of boxes:");
let boxesInEachStacks = +prompt("enter the total number of boxes in each stacks:");
let numberofStacksNeeded;
if(totalNumberOfBoxes%boxesInEachStacks===0){
       numberofStacksNeeded = totalNumberOfBoxes/boxesInEachStacks;
}else{
       numberofStacksNeeded=Math.floor(totalNumberOfBoxes/boxesInEachStacks)+1;
}
console.log(numberofStacksNeeded);