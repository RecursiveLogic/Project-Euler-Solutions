function isPrime(num) {
    if (num < 2) {
        return false;
    } else if (num < 4) {
        return true;
    } else if (num % 2 == 0) {
        return false;
    } else if (num < 9) {
        return true;
    } else if (num % 3 == 0) {
        return false;
    } else {
        var max = Math.floor(Math.sqrt(num));
        var div = 5;
        while (div <= max) {
            if (num % div == 0) {
                return false;
            } 
            if (num % (div + 2) == 0) {
                return false;
            }
            div += 6;
        }
    }
    return true;
}

function sumPrimes(num) {
    var sum = 2;
    for (var i = 3; i < num; i+=2) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumPrimes(2000000));