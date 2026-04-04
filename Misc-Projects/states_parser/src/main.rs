use serde::{Deserialize, Serialize};
use std::fs::File;
use std::io::Read;

#[derive(Debug, Serialize, Deserialize)]
struct State {
    state: String,
    abbreviation: String,
    capital: String,
}

fn main() -> Result<(), Box<dyn std::error::Error>> {

    let mut file = match File::open("src/states.json") {
        Ok(f) => f,
        Err(_) => {
            eprintln!("Error: Unable to open states data file.");
            std::process::exit(1); // Fail securely with error code
        }
    };

    let mut contents = String::new();
    if file.read_to_string(&mut contents).is_err() {
        eprintln!("Error: Unable to read states data file.");
        std::process::exit(1);
    }

    let states: Vec<State> = match serde_json::from_str(&contents) {
        Ok(s) => s,
        Err(_) => {
            eprintln!("Error: Unable to parse states data.");
            std::process::exit(1);
        }
    };


    let names: Vec<String> = states.iter().map(|s| s.state.clone()).collect();
    let abbreviations: Vec<String> = states.iter().map(|s| s.abbreviation.clone()).collect();
    let capitals: Vec<String> = states.iter().map(|s| s.capital.clone()).collect();

    let mut i = 0;
    let len = names.len();

    while i < len {
        println!("Name: {:?} | Abbreviation: {:?} | Capital: {:?}", names[i], abbreviations[i], capitals[i]);
        i = i+1;
    }

    Ok(())
}
