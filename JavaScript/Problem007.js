const isPrime = n => {
  if (n < 2) {
    return false
  } else if (n < 4) {
    return true
  } else if (n % 2 == 0 || n % 3 == 0) {
    return false
  } else {
    let div = 5
    while (div * div <= n) {
      if (n % div == 0 || n % (div + 2) == 0) {
        return false
      }
      div += 6
    }
    return true
  }
}

const solution = n => {
  let i = 0, j = 0
  while (i < n) {
    ++j
    if (isPrime(j)) {
      ++i
    }
  }
  return j
}

console.log(solution(10001))
