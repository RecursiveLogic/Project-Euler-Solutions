const fs = require('fs')
const file = fs.readFileSync('euler.txt', 'UTF8')
const data = file.split('\n').map(x => x.split(' '))

const parseMatrix = (data) => {
    let array = []
    for (let i = 0; i < data.length; ++i) {
        array[i] = []
        for (let j = 0; j < data[i].length; ++j) {
            let intj = parseInt(data[i][j])
            array[i].push(intj)
        }
    }
    return array
}

const matrix = parseMatrix(data)

const Euler011 = (matrix) => {
    let maxProduct = 0
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            if (matrix[i][j + 3]) {
                let r = matrix[i][j] * matrix[i][j + 1] *
                    matrix[i][j + 2] * matrix[i][j + 3]
                if (r > maxProduct) {
                    maxProduct = r
                }
            }
            if (matrix[i + 3]) {
                let d = matrix[i][j] * matrix[i + 1][j] *
                    matrix[i + 2][j] * matrix[i + 3][j]
                if (d > maxProduct) {
                    maxProduct = d
                }
            }
            if (matrix[i + 3] && matrix[i + 3][j + 3]) {
                let rd = matrix[i][j] * matrix[i + 1][j + 1] *
                    matrix[i + 2][j + 2] * matrix[i + 3][j + 3]
                if (rd > maxProduct) {
                    maxProduct = rd
                }
            }
            if (matrix[i + 3] && matrix[i + 3][j - 3]) {
                let ld = matrix[i][j] * matrix[i + 1][j - 1] *
                    matrix[i + 2][j - 2] * matrix[i + 3][j - 3]
                if (ld > maxProduct) {
                    maxProduct = ld
                }
            }
        }
    }
    return maxProduct
}

console.log(Euler011(matrix))
