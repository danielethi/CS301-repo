//question 3 clac down  payment


let cost=+prompt("enter cost of the house:  ");
let downPayment;
if(cost>=0 && cost<= 50000){
          downPayment=0.05*cost;
}else if(cost>50000 && cost<100000){
          downPayment=(1000+0.1)*(cost-50000);
}else if(cost>=100000 && cost<200000){
          downPayment=(2000+0.15)*(cost-100000)
}else{
          downPayment=(5000+0.1)*(cost-200000);
}
console.log("the down payment is: "+downPayment+"$");

   
  
  