function isPrime(num) {
    var isPrime = true;
    if (num == 2 || num == 3) {
        return true;
    }
    for (var i = 2; i < num; ++i) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

function getNthPrime(num) {
    var i = 0;
    var j = 0; 
    while (i <= num) {
        ++j;
        if (isPrime(j)) {
            ++i;
        }
    }
    return j;
}

console.log(getNthPrime(10001));