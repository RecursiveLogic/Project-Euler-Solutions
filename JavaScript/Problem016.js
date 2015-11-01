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

function powers(n) {
    var sum = [2];
    for (var i = 1; i < n; i++) {
        sum = add(sum, sum);
    }
    return sum.join('');
}

var numbers = powers(1000);

function plus(num) {
    var sum = 0;
    for (var i = 0; i < num.length; ++i) {
        sum += parseInt(num[i]);
    }
    return sum;
}