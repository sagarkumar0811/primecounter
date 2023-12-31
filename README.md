# Prime Counter

A simple npm package to count prime numbers within a given range.

## Installation

Install the package globally using npm and use it like the example given below:

```bash
npm install -g primecounter

# importing the package
const primecounter = require('primecounter');

# getting a list of primes in the range from 1 to 20 where both are inclusive
const listOfPrimes = primecounter(1,20);

# Output: [ 2, 3, 5, 7, 11, 13, 17, 19 ]
console.log(listOfPrimes);