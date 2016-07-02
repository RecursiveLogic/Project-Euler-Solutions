const fs = require('fs')
const file = fs.readFileSync('euler.txt', 'UTF8')
const data = file.split("\n").join('')

const Euler008 = (array) => {
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

console.log(Euler008(data))
