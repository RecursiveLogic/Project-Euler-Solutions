function squareSum(num) {
    var square = 0;
    var sum = 0;
    for (var i = 1; i <= num; ++i) {
        square += Math.pow(i, 2);
        sum += i;
    } 
    return Math.pow(sum, 2) - square;
}

console.log(squareSum(100));