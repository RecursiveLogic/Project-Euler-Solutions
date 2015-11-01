function fibonacci(x, y) {
    return (y % 2 == 0 ? y : 0) + 
        (x + y < 4000000 ? fibonacci(y, x + y) : 0)
}

console.log(fibonacci(1, 2));