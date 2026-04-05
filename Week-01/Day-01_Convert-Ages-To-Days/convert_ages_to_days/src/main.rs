use std::io;

fn main() {

    loop {

    println!("Please input your age in years!");

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
        
        let guess: u32 =  match guess.trim().parse() {
            Ok(num) => num, 
            Err(_) => continue,
        };

        let age: u32 = guess * 365;

        println!("You are roughly {age} days old!")

    }

}
