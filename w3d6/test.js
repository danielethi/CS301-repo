//keep asking user to guess a number from 1-10 until user enters 5 program 
//should also keep track of the number of attemts user made
let input;
let userAttempts=0;
do{   
       input =+prompt("please type here: ");
       userAttempts++;
}while(input !== 5);
if(userAttempts==1){
       console.log("Awesome!");
}else if(userAttempts===2){
       console.log("Great");
}else if(userAttempts===3){
       console.log("Not Bad");
}else{
  console.log(`it took you ${userAttempts} number of times`);
}