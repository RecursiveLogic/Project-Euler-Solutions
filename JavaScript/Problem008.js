/* I put all of the numbers into a txt file to do this */
var fs = require('fs');
var text = fs.readFileSync('file.txt', { encoding: 'utf-8' });
var items = text.split('\n').join(''), numbers = [];

for (var x in items) {
    numbers.push(parseInt(items[x]));
}
                
function getProduct(array) {
    var maxProduct = 1, maxArray = null;
    for (var i = 0; i < array.length; ++i) {
        var product = 1;
        for (var j = i; j <= (i + 12); ++j) {
            product *= array[j];
            if (product > maxProduct) {
                maxProduct = product;
                maxArray = array.slice(i, i + 13);
            }
        }
    }
    return {
        maxProduct: maxProduct,
        maxArray: maxArray
    };
}

console.log(getProduct(numbers));