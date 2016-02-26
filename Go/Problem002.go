package main 

import "fmt"

func main() {
    sum, i := 0, 1
    for fibonacci(i) < 4e6 {
        if (fibonacci(i) % 2 == 0) {
            sum += fibonacci(i);
        }
        i++
    }
    fmt.Println(sum)
}

func fibonacci(num int) int {
    fib1, fib2 := 1, 1
    for i := 1; i < num; i++ {
        fib := fib1 + fib2
        fib1 = fib2
        fib2 = fib
    }
    return fib1
}