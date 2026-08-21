const validateInput = (input) => {
    const number = Number(input);

    if (
        input === null ||
        input.trim() === "" ||
        Number.isNaN(number) ||
        number <= 0 ||
        !Number.isInteger(number)
    ) {
        return false;
    }

    return true;
};


const findPrimes = (limit) => {
    const primes = [];

    outerLoop:
    for (let number = 2; number <= limit; number++) {
        for (let divisor = 2; divisor < number; divisor++) {
            if (number % divisor === 0) {
                continue outerLoop;
            }
        }

        primes.push(number);
    }

    return primes;
};


const displayPrimes = (primes, limit) => {
    alert(`For n = ${limit} prime numbers are ${primes.join(",")}`);
};


let input;

do {
    input = prompt("Enter a positive integer");
} while (!validateInput(input));

const limit = Number(input);
const primes = findPrimes(limit);

displayPrimes(primes, limit);