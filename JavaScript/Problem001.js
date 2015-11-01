function getSum(num) {
    var sum = 0;
    for (var i = 0; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(getSum(1000));