//Question 2 find the LCM of two numbers
let gcd;
let leastCommonMultiple;
let gretestCommonDivisor=function(a,b){

  for(let i = 1; i <= a && i <= b; ++i) {
  
    if((a % i == 0) && (b % i == 0)){
      gcd = i;
  }

return gcd;

}

let leastCommonMultiple =function(a,b){
  leasetCommonMultiple=(a*b)/gcd;
  return leastCommonMultiple;
}
}


let result = gretestCommonDivisor(3,9);
console.log(result);

// let result2 = leastCommonMultiple(3,9);
// console.log(result);