var fs = require('fs');
var file = fs.readFileSync('euler.txt', { encoding: 'UTF-8' });
var data = file.split("\n").join('');

function getMaxProduct(array) {
    var maxProduct = 0;
    for (var i = 0; i < array.length; ++i) {
        var product = 1;
        for (var j = i; j < i + 13; ++j) {
            product *= array[j];
        }
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    return maxProduct;
}

console.log(getMaxProduct(data));