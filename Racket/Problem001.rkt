#lang racket

(apply +
    (filter (lambda (x) (or (= (modulo x 3) 0) (= (modulo x 5) 0))) (range 1000))
)
