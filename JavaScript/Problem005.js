function getPrimes(number) {
    var output = [2];
    for (var i = 3; i <= number; i+=2) {
        var isPrime = true, j = 0;
        while (output[j] * output[j] <= i) {
            if (i % output[j] == 0) {
                isPrime = false;
                break;
            } 
            ++j;
        }
        if (isPrime) {
            output.push(i);
        }
    }
    return output;
}

function noRemains(x) {
    var primes = getPrimes(x);
    var output = 1;
    for (var i = 0; i < primes.length; ++i) {
        var z = Math.floor(Math.log(x) / Math.log(primes[i]));
        output *= Math.pow(primes[i], z);
    }
    return output;
}

console.log(noRemains(20));