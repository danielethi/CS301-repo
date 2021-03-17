
function  findPorcupineNumber(n){
		let  porcupineNumber = 0;
		let  maxValue = Infinity;
		let isPorcupineNumber = false;
		n++;
		while(n <= maxValue){
			if(isPorcupineNumber){
				if(isPrime(n) == 1){
					if(n % 10 == 9){
						break;
					}else{
						isPorcupineNumber = false;
					}
				}
			}else{
				if(isPrime(n) == 1){
					if(n % 10 == 9){
						isPorcupineNumber = true;
						porcupineNumber = n;	
					}
				}
			}
			n++;
		}
		return [porcupineNumber];
	}

	function isPrime(number){
		 let isPrime = 0;
		if(number > 1){
			isPrime = 1;
			for(divider = 2; 2*divider <= number; divider++){
				if(number % divider == 0){
					isPrime = 0;
					break;
				}
			}
		}
		return isPrime;
    }
    
    let result = findPorcupineNumber(139);
    console.log(result)










