use ::clap::{Parser, Subcommand, Args};

mod api;

#[derive(Parser)]
#[command(author, version)]
#[command(about = "stringer - a simple CLI to reverse strings", long_about = "stringer is a simple, nimble cli for reversing and inspecting strings")]

struct Cli {
    #[command(subcommand)]
    command: Option<Commands>,
}

#[derive(Subcommand)]

enum Commands {
    /// 문자열을 뒤집습니다.
    Reverse(Reverse),
    /// 문자열을 검사합니다.
    Inspect(Inspect),
}

#[derive(Args)]
struct Reverse {
    /// 뒤집을 문자열
    string: Option<String>,
}

#[derive(Args)]
struct Inspect {
    /// 검사할 문자열
    string: Option<String>,

    #[arg(short = 'd', long = "digits")]
    only_digits: bool, 
}

fn main() {
    let cli = Cli::parse();

    match &cli.command {
        Some(Commands::Reverse(name)) => {
            match name.string {
                Some(ref _name) => {
                    let reverse = api::stringer::reverse(_name);
                    println!("{}", reverse);
                }
                None => {
                    println!("Please provide a string to reverse");
                }
            }
        }
        Some(Commands::Inspect(name)) => {
            match name.string {
                Some(ref _name) => {
                    let (res, kind) = api::stringer::inspect(_name, name.only_digits);

                    let mut plural_s = "s";
                    if res == 1 {
                        plural_s = "";
                    }

                    println!("{:?} has {} {}{}.", _name, res, kind, plural_s);
                }
                None => {
                    println!("Please provide a string to inspect");
                }
            }
        }
        None => {}
    }
}    
