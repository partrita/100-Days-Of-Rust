## 2024-04-02 - Use OsRng for Secure Credential Generation
**Vulnerability:** Weak cryptographically secure random number generation. The `password_generator` app was using `rand::thread_rng()` to generate passwords.
**Learning:** While `thread_rng()` is a CSPRNG, for generating secure, long-term credentials like passwords, it is best practice to use an entropy source directly from the operating system. `rand::rngs::OsRng` provides this by bypassing userspace PRNG state, which avoids potential reseeding vulnerabilities or state exposure.
**Prevention:** Always use `rand::rngs::OsRng` (or equivalent direct OS entropy sources) when generating sensitive data like passwords, API keys, or security tokens.

## 2024-04-05 - Fix Unhandled Panics and EOF DoS on Stdin Reads
**Vulnerability:** Calling `.expect()` on `io::stdin().read_line()` exposes stack traces on failure (panic) and, more importantly, fails to handle EOF properly. When stdin is closed (EOF), `read_line` returns `Ok(0)`, which typically leads to parsing failures down the line. In loop-based prompts, this results in an infinite loop causing 100% CPU usage (Denial of Service).
**Learning:** Always explicitly handle `io::stdin().read_line()` results. We must gracefully catch standard `Err` results to avoid stack trace leaks, but crucially, we must check for `Ok(0)` to detect EOF and break loops securely.
**Prevention:** Replace `.expect()` with a `match` block when reading from `stdin`. Handle `Ok(0)` by breaking the read loop, allow `Ok(_)` to continue processing, and securely exit or break on `Err(_)`.
