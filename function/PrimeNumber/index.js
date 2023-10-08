//First we have to seperate actions to making it easier to read

showPrime(20);

function isPrime(number) {
    for(let factor = 2; factor < number; factor++)
        if(number % 2 === 0)
        return false;
  
    return true;    
}

function showPrime(limit) {
    for(let number = 2; number <= limit; number++)
        if(isPrime(number)) console.log(number);
}

