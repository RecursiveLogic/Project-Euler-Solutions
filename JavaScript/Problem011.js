var fs = require('fs');
var file = fs.readFileSync('euler.txt', { encoding: 'UTF-8' });
var data = file.split('\n').map(x => x.split(' '));

function parseMatrix(data) {
    var array = [];
    for (var i = 0; i < data.length; ++i) {
        array[i] = [];
        for (var j = 0; j < data[i].length; ++j) {
            var intj = parseInt(data[i][j]);
            array[i].push(intj);
        }
    }
    return array;
}

var matrix = parseMatrix(data);

function gridProduct(matrix) {
    var maxProduct = 0;
    for (var i = 0; i < matrix.length; ++i) {
        for (var j = 0; j < matrix[i].length; ++j) {
            if (matrix[i][j + 3]) {
                var r = matrix[i][j] * matrix[i][j + 1] * 
                    matrix[i][j + 2] * matrix[i][j + 3];
                if (r > maxProduct) {
                    maxProduct = r;
                }
            }
            if (matrix[i + 3]) {
                var d = matrix[i][j] * matrix[i + 1][j] * 
                    matrix[i + 2][j] * matrix[i + 3][j];
                if (d > maxProduct) {
                    maxProduct = d;
                }
            }
            if (matrix[i + 3] && matrix[i + 3][j + 3]) {
                var rd = matrix[i][j] * matrix[i + 1][j + 1] *
                    matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
                if (rd > maxProduct) {
                    maxProduct = rd;
                }
            }
            if (matrix[i + 3] && matrix[i + 3][j - 3]) {
                var ld = matrix[i][j] * matrix[i + 1][j - 1] *
                    matrix[i + 2][j - 2] * matrix[i + 3][j - 3];
                if (ld > maxProduct) {
                    maxProduct = ld;
                }
            }
        }
    }
    return maxProduct;
}

console.log(gridProduct(matrix));