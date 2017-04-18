fn problem_001(n: i32) -> i32 {
    (0..n).filter(|x| x % 5 == 0 || x % 3 == 0).sum()
}

fn main() {
    println!("{:?}", problem_001(1000));
}
