fib :: Int -> Int -> [Int]
fib x y = x : fib y (x + y)

main = print (sum . takeWhile (< 4 * 10^6) . filter even $ fib 0 1)
