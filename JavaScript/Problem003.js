function getFactors(num) {
    var factors = [], 
        div = 2;
    while (num > 2) {
        if (num % div == 0) {
            factors.push(div);
            num = num / div;
        } else {
            div++;
        }
    }
    return factors;
}

console.log(getFactors(600851475143));