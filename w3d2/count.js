//count number of properties in object

let sam1= {
    name : "sam",
    age:10,
    }
let sam2 = {
    name : "sam",
    age:10,
    }
let john = {
    name : "John",
    age:10,
    }
   let count =0;
    function countPropeties(obj){
       for(let prop in sam1){
            
             count++;
       }
    
    return count;
}
    let result = countPropeties(sam1);
    console.log(result);