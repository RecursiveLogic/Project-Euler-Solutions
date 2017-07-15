const solution = (num) => {
  let fib1 = 1, fib2 = 2
  let sum = 2
  for (let i = fib1; fib1 < num; ++i) {
    let fib = fib1 + fib2
    fib1 = fib2
    fib2 = fib
    if (fib % 2 == 0) {
      sum += fib
    }
  }
  return sum
}

console.log(solution(4000000))
