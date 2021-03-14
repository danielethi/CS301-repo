let sam1 = {
    name:"daniel",
    age:28
  }
  let sam2={
    name : "daniel",
    age:28
  }
  let John ={
    name : "sam",
    age:14
  }
//printing object elements
for(let n in sam1) {
    console.log(n);
} 
console.log(isEqual(sam1,sam2))
function isEqual(obj1,obj2){
    if(obj1.name===obj2.name && obj1.age===obj2.age){
        return true;
}else{
      return false;
}
}

console.log(delete John.age);
console.log(John)

let str = "Hello";
for(let n of str){
  //console.log(n)
  console.log(str.substring(2))
}