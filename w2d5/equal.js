
//this checks if two arrays are equal or not

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
let result = isArrayEqual([1,2,3],[1,2,3]);
console.log(result);