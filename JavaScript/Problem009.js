function pythagTriple(num) {
    var max = Math.floor(num / 2);
    for (var i = 1; i < max; ++i) {
        for (var j = i; j < max; ++j) {
            var a = i * i;
            var b = j * j;
            var c = num - i - j;
            if (a + b == (c * c)) {
                var product = (i * j * c);
                return {
                    a: i,
                    b: j,
                    c: c,
                    answer: product
                };
            }
        }
    }
}

console.log(pythagTriple(1000));