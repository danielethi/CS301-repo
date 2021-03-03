/*Write a function expression and assign it to the variable
greatestCommonDivisor, which will compute GCD (Greatest Common Divisor) of two
numbers. GCD is the largest number that divides both. For example GCD of 20 and 28 is 4 and
GCD of 98 and 56 is 14.
*/
let gcd = function(a, b) {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
  }
  let result = gcd(20,28);
  console.log(result);
