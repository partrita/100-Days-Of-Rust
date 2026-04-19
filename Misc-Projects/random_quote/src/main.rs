use serde::{Deserialize, Serialize};
use reqwest::blocking::Client;
use std::time::Duration;

pub type Response = Vec<Quote>;

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Quote {
    pub q: String,
    pub a: String,
    pub h: String,
}

fn main() {
    // 🛡️ Sentinel: Add timeout to external API calls to prevent DoS via hanging connections
    let client = match Client::builder().timeout(Duration::from_secs(5)).build() {
        Ok(c) => c,
        Err(_) => {
            eprintln!("Error: Failed to initialize HTTP client. Exiting securely.");
            std::process::exit(1);
        }
    };

    // 🛡️ Sentinel: Fix unhandled panics by catching and handling errors securely
    match client.get("https://zenquotes.io/api/random").send() {
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
