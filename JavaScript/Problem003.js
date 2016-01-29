function largestPrimeFactor(num) {
    var factor = 0;
    var div = 2;
    while (div <= num) {
        if (num % div == 0) {
            factor = div;
            num /= div;
        } else {
            ++div;
        }
    }
    return factor;
}

console.log(largestPrimeFactor(600851475143));