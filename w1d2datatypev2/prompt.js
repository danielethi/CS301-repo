
//let is local scope whereas var is gloabl 

//var vs let
let x=5;
console.log(x);
if(x==5){
    let y=2*x;
    console.log(y);
    console.log(x);
}
console.log(x);
console.log(y);

//output with let 
5
10
5
5
10
//output with var 

5
10
5
5
//y will reuslt in eror 
