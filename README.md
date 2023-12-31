# Prime Counter

A simple npm package to count prime numbers within a given range.

## Installation

Install the package globally using npm:

```bash
npm install -g primecounter

# Usage

const primeCounter = require('primecounter');

const listOfPrimes = primeCounter(1,20);

console.log(listOfPrimes);

# Output:
# [
#    2,  3,  5,  7,
#   11, 13, 17, 19
# ]