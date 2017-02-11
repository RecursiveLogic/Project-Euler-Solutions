main = print (maximum [x | y <- [99..999], z <- [y..999], let x = y * z, (show x) == (reverse $ show x)])
