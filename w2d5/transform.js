//transform a given array using symbols

function transform(arr){
    let arrin = arr.reverse();
   let newArray = arrin.join('_');

    return newArray;
}
let result = transform(['quick','brown','fox']);
console.log(result);