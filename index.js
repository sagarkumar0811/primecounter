function getPrimesInRange(m, n) {
    // Validate input
    if (m < 1 || n < m) {
        throw new Error('Invalid range');
    }

    // Create an array to mark numbers as prime or not
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

    // Apply the Sieve of Eratosthenes algorithm
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // getting a list of primes in the range from m to m where both are inclusive
    const listOfPrimes = [];
    for (let i = Math.max(2, m); i <= n; i++) {
        if (isPrime[i]) {
            listOfPrimes.push(i);
        }
    }

    return listOfPrimes;
}

module.exports = getPrimesInRange;