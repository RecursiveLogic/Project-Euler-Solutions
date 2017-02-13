import Data.List.Split
import Data.List

main = do
  content <- readFile "Haskell/Problem008.txt"
  print (maximum [product $ map ((read . (:[]))) b | b <- map (take 13) . filter ((>12) . length) $ (tails . concat $ splitOn "\n" content)])
