
//this will check if a string contain a mantching word
function checkSpam(str){
  if(str.includes("lottery"||"prize")){
      return true;
     }
return false;
}
let result = checkSpam("how are you my lottery friend");
console.log(result);