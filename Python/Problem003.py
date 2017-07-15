def solution(n):
    factors = []
    div = 2
    while (div <= n):
        if n % div == 0:
            factors.append(div)
            n /= div
        else:
            div = div + 1
    return factors[len(factors) - 1]

print (solution(25))
