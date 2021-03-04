function isEven(n){
  return n%2===0;
}
function printEven(n){
  for(let i=1;i<=n;i++){
    if(isEven(i)){
      console.log(i)
    }
  }
}
printEven(10);
