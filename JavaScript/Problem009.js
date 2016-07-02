const Euler009 = (num) => {
    let max = Math.floor(num / 2)
    for (let i = 1; i < max; ++i) {
        for (let j = i; j < max; ++j) {
            let a = i * i
            let b = j * j
            let c = num - i - j
            if (a + b == (c * c)) {
                let product = (i * j * c)
                return {
                    a: i,
                    b: j,
                    c: c,
                    answer: product
                }
            }
        }
    }
}

console.log(Euler009(1000));
