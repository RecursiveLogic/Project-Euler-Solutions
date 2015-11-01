function getPrimes(num) {
    var primes = [2, 3];
    for (var i = 5; primes.length < num; i+=2) {
        var isPrime = true;
        for (var j = 0; j < primes.length; ++j) {
            if (i % primes[j] == 0) {
                isPrime = false;
                break;
            } 
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes[primes.length - 1];
}