use rand::{Rng, rngs::OsRng};

fn main() {
    
    const CHARSET: &[u8] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZ\
                            abcdefghijklmnopqrstuvwxyz\
                            0123456789)(*&^%$#@!~";
    const PASSWORD_LEN: usize = 30;

    // 🛡️ Sentinel: Using OsRng instead of thread_rng() for cryptographically secure random number generation
    let mut rng = OsRng;

    let password: String = (0..PASSWORD_LEN)
        .map(|_| {
            let idx = rng.gen_range(0..CHARSET.len());
            CHARSET[idx] as char
        })
        .collect();
    println!("The following password was generated:");
    println!("{:?}", password);
}