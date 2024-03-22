
// DAY 14/30

// HOW TO FIND PRIME NUMBERS IN JAVASCRIPT

var number = +prompt("Enter Number");

if (number === 1) {
    console.log(`${number} is not prime neither composite`);
} else if (number < 1) {
    console.log(`Prime number of ${number} is not possible`);
} else {
    let isPrime = true; 
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false; 
            break; 
        }
    }

    if (isPrime) {
        console.log(`${number} is prime number`);
    } else {
        console.log(`${number} is not prime number`);
    }
}