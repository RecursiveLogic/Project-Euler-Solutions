sumMultiples :: Integer -> Integer
sumMultiples x = sum [ y | y <- [1..x], mod y 3 == 0 || mod y 5 == 0 ]

main = print (sumMultiples 999)