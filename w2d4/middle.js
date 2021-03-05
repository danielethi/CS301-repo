//find the middle element in the array
let middleArray;
function getMiddle(arr) {
    for(let i=0;i<arr.length;i++){
    middleArray = arr[(arr.length-1)/2];
        if(middleArray===undefined){
           
            return  middleArray = arr[(arr.length-1)/2] ;

          

        }
    }
       return  middleArray; 
       
}

let result=getMiddle([1,2,5,15,5,7,8,9]);
console.log(result);