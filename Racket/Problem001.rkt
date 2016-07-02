#lang racket

(apply + (filter (λ (x) (or (= (modulo x 3) 0) (= (modulo x 5) 0))) (range 1000)))
