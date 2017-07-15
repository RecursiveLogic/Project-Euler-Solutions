const getPrimes = (num) => {
  let primes = []
  for (let i = 2; i <= num; ++i) {
    let isPrime = true
    for (let j = 2; j < i; ++j) {
      if (i % j == 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      primes.push(i)
    }
  }
  return primes
}

const solution = (primes) => {
  let output = 1
  for (let i = 0; i < primes.length; ++i) {
    let a = Math.floor(Math.log(20) / Math.log(primes[i]))
    output *= Math.pow(primes[i], a)
  }
  return output
}

console.log(solution(getPrimes(20)))
