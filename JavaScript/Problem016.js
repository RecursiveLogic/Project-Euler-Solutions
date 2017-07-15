const solution = n => (2**n).toString().split('').map(x => +x).reduce((a, b) => a + b)

console.log(solution(1000))
