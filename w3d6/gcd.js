
//find the gcd  and lcm of tow 

function lcm(a,b){
    return (a*b)/gcd(a,b);
}
function gcd(a,b){
    while(a!==b){
         if(a>b){
           a= a-b
         }else if(a<b){
           b= b-a
         }
    }
    return b;
  }
  let result = gcd(18,9);
  console.log(result);