primeFactors :: Int -> [Int]
primeFactors x =
    case factors of
        [] -> [x]
        _  -> factors ++ primeFactors (div x (head factors))
    where factors  = take 1 $ filter (\y -> mod x y == 0) [2..x - 1]

main = print (last $ primeFactors 600851475143)
