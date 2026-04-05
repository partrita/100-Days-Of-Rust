use std::io;
use std::cmp::Ordering;
use rand::Rng;


fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    loop {
        
        println!("Please input your guess.");

        let mut guess = String::new();

        match io::stdin().read_line(&mut guess) {
            Ok(0) => {
                println!("EOF reached. Exiting securely.");
                return;
            }
            Ok(_) => {}
            Err(_) => {
                println!("Failed to read input. Exiting securely.");
                return;
            }
        }

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num, 
            Err(_) => continue,
        };

        println!("You guessed: {guess}");

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => println!("You win"),
        }
    }
}
