function addPrimes(number) {
    var primes = [2];
    for (var i = 3; i <= number; i += 2) {
        var isPrime = true, j = 0;
        while (primes[j] * primes[j] <= i) {
            if (i % primes[j] == 0) {
                isPrime = false;
                break;
            }
            ++j;
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes.reduce(function(a, b) {
        return a + b;
    });
}

console.log(addPrimes(2000000));