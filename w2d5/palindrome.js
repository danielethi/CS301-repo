
let myArray=[];
function checkPalindrome(arr){
           for(let i=0;i<arr.length;i++){
               myArray.push(arr.pop);
              return  isArrayEqual(arr,myArray);
           }
function isArrayEqual(arr1,arr2){
    if(arr1.length!=arr2.length){
           return false;
    }else{
       for(let i=0;i<arr1.length;){
           if(arr1[i]===arr2[i]){
               return true;
           }else{

             return false;        
       }
}
    }
}
}
let result=checkPalindrome(["hi","Angi","hi"]);
console.log(result);
