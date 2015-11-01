function add(a, b) {
    while (a.length < b.length) a.unshift(0);
    while (a.length > b.length) b.unshift(0);
    var carry = 0, sum = [];
    for (var i = a.length - 1; i >= 0; --i) {
        var x = a[i] + b[i] + carry;
        if (x >= 10) {
            x -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        sum.unshift(x);
    }
    if (carry) {
        sum.unshift(carry);
    }
    return sum;
}

function fib(num) {
    var fib1 = [1], fib2 = [1], counter = 1;
    while (fib1.length < num) {
        var fib = add(fib1, fib2);
        fib1 = fib2;
        fib2 = fib;
        counter++;
    }
    return counter;
}