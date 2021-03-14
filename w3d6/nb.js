
//add to arrays metrix
function sum(arr1,arr2){
    let sum=0;
         for(let i=0;i<arr1.length;i++){
           for(let j=0;j<arr1[i].length;j++){
                  sum+=arr1[i][j]+arr2[i][j];
           } 
         return sum;
         }
  }
  let result = sum([[1,2,3],[3,4,6]],[[8,9,16],[3,5,6]]);
  console.log(result);