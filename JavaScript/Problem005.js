function getPrimes(num) {
    var primes = [];
    for (var i = 2; i <= num; ++i) {
        var isPrime = true;
        for (var j = 2; j < i; ++j) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}

function smallestMultiple(primes) {
    var output = 1;
    for (var i = 0; i < primes.length; ++i) {
        var a = Math.floor(Math.log(20) / Math.log(primes[i]));
        output *= Math.pow(primes[i], a);
    }
    return output;
}

console.log(smallestMultiple(getPrimes(20)));