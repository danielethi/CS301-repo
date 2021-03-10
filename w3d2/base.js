//this will calculate the power of any base
function power(base, exponent) {    
    if (exponent == 0)               
      return 1;                       
    else
      return base * power(base, exponent - 1);
  }
  let result = power(5,3);
  console.log(result)
