isPrime :: Integer -> Bool
isPrime y = null [x | x <- [2..y - 1], mod y x == 0]

main = print ((2 : [x | x <- [3..], isPrime x]) !! 10000)
