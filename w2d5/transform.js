//transform a given array using symbols

function transform(arr){
   let newArray = arr.join('_');
    return newArray;
}
let result = transform(['quick','brown','fox']);
console.log(result);