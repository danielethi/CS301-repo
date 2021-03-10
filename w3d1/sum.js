//this will give the sum of the ineer arrays 
let j=0;
let sum=0;
function innerSum(arr){
for(let i=0;i<arr.length;i++){
          sum+=arr[i][j];
    }
return sum;
}


let result = innerSum([[1, 2], [3, 4], [5, 6]] );
console.log(result);
