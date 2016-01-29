function sumEvenFibo(num) {
    var fib1 = 1, fib2 = 2;
    var sum = 2;
    for (var i = fib1; fib1 < num; ++i) {
        var fib = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib;
        if (fib % 2 == 0) {
            sum += fib;
        }
    }
    return sum;
}

console.log(sumEvenFibo(4000000));