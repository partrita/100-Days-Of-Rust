## 2024-04-02 - Use OsRng for Secure Credential Generation
**Vulnerability:** Weak cryptographically secure random number generation. The `password_generator` app was using `rand::thread_rng()` to generate passwords.
**Learning:** While `thread_rng()` is a CSPRNG, for generating secure, long-term credentials like passwords, it is best practice to use an entropy source directly from the operating system. `rand::rngs::OsRng` provides this by bypassing userspace PRNG state, which avoids potential reseeding vulnerabilities or state exposure.
**Prevention:** Always use `rand::rngs::OsRng` (or equivalent direct OS entropy sources) when generating sensitive data like passwords, API keys, or security tokens.
