const isPrime = (num) => {
    let isPrime = true
    if (num == 2 || num == 3) {
        return true
    }
    for (let i = 2; i < num; ++i) {
        if (num % i == 0) {
            isPrime = false
            break
        }
    }
    return isPrime
}

const Euler007 = (num) => {
    let i = 0
    let j = 0
    while (i <= num) {
        ++j
        if (isPrime(j)) {
            ++i
        }
    }
    return j
}

console.log(Euler007(10001))
