use sha1::Digest;
use std::{
    env,
    fs::File, 
    io::{BufRead, BufReader},
};

const SHA1_HEX_STRING_LENGTH: usize = 40;

// 🛡️ Sentinel: Removed Result return type from main to avoid leaking error details via ? operator.
fn main() {
    let args: Vec<String> = env::args().collect();

    if args.len() != 3{
        println!("Usage:");
        println!("sha1_cracker: <wordlist.txt> <sha1_hash>");
        std::process::exit(1);
    }

    let hash_to_crack = args[2].trim();
    if hash_to_crack.len() != SHA1_HEX_STRING_LENGTH {
        eprintln!("Error: sha1 hash is not valid. Exiting securely.");
        std::process::exit(1);
    }

    let wordlist_file = match File::open(&args[1]) {
        Ok(f) => f,
        Err(_) => {
            eprintln!("Error: Unable to open wordlist file. Exiting securely.");
            std::process::exit(1);
        }
    };

    let reader = BufReader::new(&wordlist_file);

    for line in reader.lines() {
        let line = match line {
            Ok(l) => l,
            Err(_) => {
                eprintln!("Error: Failed to read from wordlist file. Exiting securely.");
                std::process::exit(1);
            }
        };
        let common_password = line.trim();
        if hash_to_crack == &hex::encode(sha1::Sha1::digest(common_password.as_bytes())) {
            println!("Password found: {}", &common_password);
            return;
        }
    }

    println!("password not found in wordlist :(");
}
