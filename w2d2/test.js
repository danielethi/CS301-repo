//Question 1 find the greatest common factors of two numbers using js 
var gcd = function(a, b) {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
  }
  let result = gcd(9);
  console.log(result);
  /* this can be rewritten as 
    funciton gcd(a,b){
        if(!b){
            return a;
        }else{
            return gcd(a%b);
        }
    */