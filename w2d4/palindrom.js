let newArray=[];
let palindrom =true;
function checkPalindrome(arr){
     for(let i=0;i<arr.length;i++){
           newArray[i]=arr.pop();
           if(arr[i]===newArray[i]){
               palindrom = true;
           }else{
            palindrom=false;
           }
     }
     return palindrom;
}
let result=checkPalindrome([1,4,4,1]);
console.log(result);