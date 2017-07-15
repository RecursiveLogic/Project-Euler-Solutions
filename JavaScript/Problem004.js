const palindrome = (number) => {
  const array = number.toString().split('')
  for (let i = 0, j = array.length - 1; i < j; ++i, --j) {
    if (array[i] !== array[j]) {
      return false
    }
  }
  return true
}

const solution = (num) => {
  let max = 0
  for (let i = 100; i < num; ++i) {
    for (let j = i; j < num; ++j) {
      let product = i * j
      if (palindrome(product)) {
        if (product > max) {
          max = product
        }
      }
    }
  }
  return max
}

console.log(solution(1000))
