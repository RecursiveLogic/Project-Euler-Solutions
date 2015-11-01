function getSquared(num) {
    var square = 0, sum = 0;
    for (var i = 1; i <= num; i++) {
        square += i * i;
        sum += i;
    }
    return (sum * sum) - square;
}

console.log(getSquared(100));