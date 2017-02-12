main = print (head $ [a * b * c | a <- [1..1000], b <- [1..a], let c = 1000 - a - b, c^2 == a^2 + b^2])
