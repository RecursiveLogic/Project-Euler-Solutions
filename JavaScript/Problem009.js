function pythagoras(number) {
    var output = [];
    for (var i = 1; i < number / 3; ++i) {
        for (var j = i; j < number / 2; ++j) {
            var key = number - i - j;
            if ((i * i) + (j * j) == (key * key)) {
                output.push(i, j, key);
                break;
            }
        }
    }
    return output.reduce(function(a, b) {
        return a * b;
    });
}

console.log(pythagoras(1000));