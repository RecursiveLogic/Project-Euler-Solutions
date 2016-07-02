const Euler003 = (num) => {
    let factor = 0
    let div = 2
    while (div <= num) {
        if (num % div == 0) {
            factor = div
            num /= div
        } else {
            ++div
        }
    }
    return factor
}

console.log(Euler003(600851475143))
