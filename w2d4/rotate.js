//this function will rotate array
//

function rotate(arr){
    let temp=arr[0];
    for(let i=1;i<=arr.length-1;i++){
    arr[i-1]=arr[i];
    }
    arr[arr.length-1]=temp
    
    for(let i=0;i<arr.length;i++){
    console.log(arr[i])
    }
    }
    
   rotate([1,2,3,4,5]);
