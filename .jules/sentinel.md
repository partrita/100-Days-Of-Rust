## 2024-04-02 - Use OsRng for Secure Credential Generation
**Vulnerability:** Weak cryptographically secure random number generation. The `password_generator` app was using `rand::thread_rng()` to generate passwords.
**Learning:** While `thread_rng()` is a CSPRNG, for generating secure, long-term credentials like passwords, it is best practice to use an entropy source directly from the operating system. `rand::rngs::OsRng` provides this by bypassing userspace PRNG state, which avoids potential reseeding vulnerabilities or state exposure.
**Prevention:** Always use `rand::rngs::OsRng` (or equivalent direct OS entropy sources) when generating sensitive data like passwords, API keys, or security tokens.

## 2024-04-05 - Fix Unhandled Panics and EOF DoS on Stdin Reads
**Vulnerability:** Calling `.expect()` on `io::stdin().read_line()` exposes stack traces on failure (panic) and, more importantly, fails to handle EOF properly. When stdin is closed (EOF), `read_line` returns `Ok(0)`, which typically leads to parsing failures down the line. In loop-based prompts, this results in an infinite loop causing 100% CPU usage (Denial of Service).
**Learning:** Always explicitly handle `io::stdin().read_line()` results. We must gracefully catch standard `Err` results to avoid stack trace leaks, but crucially, we must check for `Ok(0)` to detect EOF and break loops securely.
**Prevention:** Replace `.expect()` with a `match` block when reading from `stdin`. Handle `Ok(0)` by breaking the read loop, allow `Ok(_)` to continue processing, and securely exit or break on `Err(_)`.

## 2024-04-10 - Prevent Integer Overflow Denial of Service in User Inputs
**Vulnerability:** A CLI utility reading user input as an integer multiplied it without any validation, leading to application panic (DoS) when providing exceptionally large inputs (e.g., `40000000`) due to integer overflow.
**Learning:** Always validate and bound user inputs to realistic ranges before performing arithmetic. In addition to logical bounds checking, defense-in-depth requires using safe arithmetic methods like `checked_mul` to fail securely instead of panicking on overflow.
**Prevention:** Add input bounds checking (e.g., `if age > 130`) and use `checked_mul`, `checked_add`, etc. for arithmetic operations, securely matching on `Some()` and `None` to prevent unhandled panics.

## 2024-04-15 - Prevent Information Leakage via Unhandled Errors in `main`
**Vulnerability:** Returning `Result<(), Box<dyn Error>>` from `main` and using the `?` operator for file operations exposes raw OS error details (like paths and OS error codes) to the user when an operation fails.
**Learning:** In CLI applications, the default Rust error formatter for `main` returning `Result` is verbose and intended for debugging, making it unsuitable for user-facing output as it violates the principle of failing securely and not leaking internal details.
**Prevention:** Do not return `Result` from `main` when standard user-facing error handling is required. Instead, use explicit `match` blocks for operations that can fail, log generic, safe error messages to the user, and exit securely.

## 2024-04-20 - Enforce Timeouts on External API Calls
**Vulnerability:** External API requests (e.g., using `reqwest::blocking::get`) without explicit timeouts can hang indefinitely if the remote server becomes unresponsive. This can lead to resource exhaustion and Denial of Service (DoS) in the application.
**Learning:** Default HTTP clients often do not enforce a strict timeout. It is critical to explicitly configure a reasonable timeout (e.g., 5-10 seconds) for all external network requests to ensure the application fails fast and gracefully instead of hanging.
**Prevention:** Instantiate a custom HTTP client configured with a timeout (e.g., `Client::builder().timeout(Duration::from_secs(5)).build()`) and use it for requests instead of relying on default convenience functions like `reqwest::blocking::get`. Ensure the client building process securely handles potential errors without panicking.
