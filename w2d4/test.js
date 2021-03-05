//add 10 random numbers in empty array
// let arr1=[];
// for(let i=0;i<10;i++){
// let r=Math.floor(Math.random()*10)+1;
// arr1.push(r);
// console.log(arr1);
// }

// console.log("=======this are the ronadom========");
// let arr = [1,2,7,4];
// console.log(arr.length);
// console.log(arr.length-1);
// console.log(arr[0]+arr[arr.length-1]);
// arr.push("ana");
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log("====looping=====");
// for(let elem of arr){
//     console.log(elem);
// }
// arr[3]="daniel";
// console.log(arr);
// arr[0]='Tam';
// console.log(arr);
// //cal the average of elements in array
// let scores = [10,20,30,40,50];
// let sum =0;
// let average=0;
// function findAverage(scores){
        
//          for(let i=0;i<scores.length;i++){
//               sum=sum+scores[i];
//               average = sum/scores.length;
//          }
// return average;
// }
// //check if the middle element is odd or evern
// let isOdd;
// let middleArray = scores[(scores.length-1)/2]
// if(middleArray%2==0){
//     isOdd=false;
// }else{
//    isOdd=true;
// }
// console.log(isOdd);
// console.log(middleArray);
// let result = findAverage(scores);
// console.log(result);



let newArray=[];
let palindrom =true;
function checkPalindrome(arr){
     for(let i=0;i<arr.length;i++){
           newArray[i]=arr.pop();
           if(arr[i]===newArray[i]){
               palindrom = true;
           }else{
            palindrom=false;
           }
     }
     return palindrom;
}
let result=checkPalindrome([1,4,4,1,1]);
console.log(result);