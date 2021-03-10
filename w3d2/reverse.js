//this will reverse a sting using JS recursion

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
let result = reverse("Hello");
console.log(result)