//check if a given number is a perfect squeare

const number =8;
let sum =1;
for(let i=0;i<number;i++){
    if(number%i===0){
        sum=sum+i;
    }
}
if(sum===number){
    console.log("perfect!");
}else{
    console.log("Sorry,not percet :")
}