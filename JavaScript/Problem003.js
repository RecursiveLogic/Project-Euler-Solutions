const solution = (num) => {
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

console.log(solution(600851475143))
