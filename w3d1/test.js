// if (len1>len2){
//     return len1;
// } else {
//     return len2;
// } 
function suffix(str1, str2) {
    let shefo = "";
    let len1 = str1.length;
    let len2 = str2.length;
    let len = (len1 > len2) ? len1 : len2;//Meanig
    // if (len1>len2){
    //  len1;
    //  } else {
    // len2;
    //   } 
    for (let i = 0; i < len; i++) {
    if (str1[len1 - i - 1] !== str2[len2 - i - 1]) {
    return shefo;
    }
    shefo = str1[len1 - i - 1]+shefo;
    }
    return shefo;
    }
    console.log(suffix("jackjson", "johnjson"));