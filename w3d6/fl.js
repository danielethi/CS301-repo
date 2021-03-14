
// flush out array that exist in odd indices
function elem(arr){
    let out=[];
     for(let i=0;i<arr.length;i++){
          if(isPrime(i)===true){
             out.push(arr[i]);
          }
     }
     return out
 }
 function isPrime(n){
   for(let i=2;i<n;i++){
     if(n%i===0){
       return false;
   }
       return true;
 }
 }
 let result = elem([1,2,33,44,11,21,9]);
 console.log(result);