//this will compare objects based on property values 
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
    function isPersonEqual(obj1,obj2){
    if(obj1.name===obj2.name && obj1.age===obj2.age){
             return true;
    }else{
            return false;
       }
    }
    let result=isPersonEqual(sam1,sam2);
    console.log(result);
    