let newArray = [];
function copy(arr){
     for(let i=0;i>arr.length;i++){

             newArray=arr.slice(0);
                 }  
  return newArray;

}
let result = copy([1,2,3,4,5,6])
console.log("the copy of your array is : "+result);