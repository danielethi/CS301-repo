function returnIndex(arr,target){
    let j=0;
    for(let i=0;i<arr.length;i++){
   if(arr[i]+arr[j]===arr[i]){
         return [arr.indexOf(arr[i]),arr.indexOf(arr[j])];
   }
    }
}
let result = returnIndex([2,3,4,5,6,11,9],9);
console.log(result)