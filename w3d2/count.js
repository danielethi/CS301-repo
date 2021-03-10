//this will count the nuber of digits in a given nubmer

function countdigits(n,k){
    if (n == 0) 
        return 0; 

    // Extracting least  
    // significant digit 
     digit = n % 10; 
    if (digit == k) 
        return 1 + countdigits(n / 10, k); 

    return countdigits(n / 10, k); 


// Driver Code 
}

   console.log(countdigits(1000, 0)); //output is 3 3 zeroes

