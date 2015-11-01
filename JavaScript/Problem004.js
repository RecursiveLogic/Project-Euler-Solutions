function makePalindrome(input) {
    var reversed = input.toString().split('').reverse().join('');
    return parseInt(input + reversed);
}

function isPalindrome(num) {
    var found = false, key = num, palindrome = 0;
    while (!found) {
        --num;
        palindrome = makePalindrome(num);
        for (var i = key; i > Math.floor(key * 0.1); --i) {
            if (palindrome / i > key || i * i < palindrome) {
                break;
            } if (palindrome % i == 0) {
                found = true;
                break;
            }
        }
    }
    return palindrome;
}

console.log(isPalindrome(999));