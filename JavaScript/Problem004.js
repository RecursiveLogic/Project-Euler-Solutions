function palindrome(number) {
    var array = number.toString().split('');
    for (var i = 0, j = array.length - 1; i < j; ++i, --j) {
        if (array[i] !== array[j]) {
            return false;
        }
    }
    return true;
}

function largestPalindrome(num) {
    var max = 0;
    for (var i = 100; i < num; ++i) {
        for (var j = i; j < num; ++j) {
            var product = i * j;
            if (palindrome(product)) {
                if (product > max) {
                    max = product;
                }
            }
        }
    }
    return max;
}

console.log(largestPalindrome(1000));