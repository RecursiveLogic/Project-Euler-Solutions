var fs = require('fs'),
    text = fs.readFileSync('numbers.txt', {encoding: 'utf-8'}),
    nums = text.split('\n'),
    numbers = [];
    
for (var num in nums) {
    numbers.push(JSON.parse(nums[num]));
}

Number.prototype.noExponents = function () {
    var data = String(this).split(/[eE]/);
    if (data.length == 1) return data[0];
    var z = '', 
        sign = this < 0 ? '-' : '',
        str = data[0].replace('.', ''),
        mag = Number(data[1]) + 1;
    if (mag < 0) {
        z = sign + '0.';
        while (mag++) z += '0';
        return z + str.replace(/^\-/, '');
    }
    mag -= str.length;
    while (mag--) z += '0';
    return str + z;
}

function largeSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; ++i) {
        sum += array[i];
    }
    return sum.noExponents();
}