let myArray = [];
function sorted(arr1,arr2){
    for(let i=0;i<arr1.length && arr2<arr2.length;i++){
           myArray.push(arr1);
           myArray.push(arr2);
           myArray.sort();


    }
    return myArray;
}
let result = sorted([1,2,3,4],[5,6,7,8]);
console.log(result);