const solution = (num) => {
  let square = 0
  let sum = 0
  for (let i = 1; i <= num; ++i) {
    square += Math.pow(i, 2)
    sum += i
  }
  return Math.pow(sum, 2) - square
}

console.log(solution(100))
