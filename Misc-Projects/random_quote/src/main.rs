use serde::{Deserialize, Serialize};
use reqwest::blocking::get;

pub type Response = Vec<Quote>;

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Quote {
    pub q: String,
    pub a: String,
    pub h: String,
}

fn main() {
    // 🛡️ Sentinel: Fix unhandled panics by catching and handling errors securely
    match get("https://zenquotes.io/api/random") {
        Ok(res) => {
            match res.json::<Response>() {
                Ok(quotes) => {
                    for quote in quotes {
                        println!("Author: {}", quote.a);
                        println!("Quote: {}", quote.q);
                    }
                }
                Err(_) => {
                    eprintln!("Error: Failed to parse the response from the server.");
                }
            }
        }
        Err(_) => {
            eprintln!("Error: Failed to fetch a quote. Please check your internet connection or try again later.");
        }
    }
}
