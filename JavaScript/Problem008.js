const fs = require('fs')
const file = fs.readFileSync('./TextFiles/Problem008.txt', 'UTF8')
const data = file.split("\n").join('')

const solution = (array) => {
  let maxProduct = 0
  for (var i = 0; i < array.length; ++i) {
    let product = 1
    for (let j = i; j < i + 13; ++j) {
      product *= array[j]
    }
    if (product > maxProduct) {
      maxProduct = product
    }
  }
  return maxProduct
}

console.log(solution(data))
