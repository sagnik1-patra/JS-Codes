🧠 JavaScript Advanced Interview Problems & Solutions

A curated collection of advanced JavaScript problems commonly asked in frontend, full-stack, and JavaScript interviews.
Each problem focuses on core language concepts such as closures, promises, immutability, async control flow, and system design patterns.

All solutions are written in plain JavaScript, emphasizing clarity, correctness, and interview readiness.

📌 Problems Covered
1️⃣ Deep Merge Objects

Problem: Merge two objects deeply without mutating the originals.
Core Idea:

Recursively traverse nested objects

Merge keys instead of overwriting entire objects

Preserve immutability using object spreading

2️⃣ Custom Promise.all

Problem: Recreate JavaScript’s Promise.all.
Core Idea:

Normalize values using Promise.resolve

Maintain result order

Reject immediately on the first failure

3️⃣ Rate Limiter Using Closures

Problem: Limit a function so it executes once per time window.
Core Idea:

Use closures to store the last execution timestamp

Compare time differences before allowing execution

4️⃣ Class-Based Cache with Expiry (TTL)

Problem: Build a cache that expires values after a given time.
Core Idea:

Store value along with expiration timestamp

Validate expiry during retrieval

5️⃣ Async Sequential Execution

Problem: Execute async functions one after another (not in parallel).
Core Idea:

Use async/await inside a loop

Wait for each promise to resolve before proceeding

6️⃣ Immutable Update of Nested Object

Problem: Update a deeply nested value without mutating the original object.
Core Idea:

Recursively rebuild only the required path

Return a new object at every level

7️⃣ Infinite Currying Function

Problem: Support chained function calls until invoked with no arguments.
Core Idea:

Use closures to accumulate values

Terminate when no argument is passed

8️⃣ Async Retry Mechanism

Problem: Retry a failing async function up to N times.
Core Idea:

Wrap logic in try/catch

Retry recursively until attempts are exhausted

9️⃣ Custom Event Emitter

Problem: Implement a publish–subscribe system.
Core Idea:

Maintain event-to-listener mappings

Support subscribe, emit, and unsubscribe

🔟 Async String Processing Pipeline

Problem: Apply multiple async string transformations sequentially.
Core Idea:

Chain promises

Each transformation returns a promise

1️⃣1️⃣ Promise Timeout Wrapper

Problem: Reject a promise if it takes too long to resolve.
Core Idea:

Use Promise.race

Race the promise against a timeout rejection

1️⃣2️⃣ Async Execution Order

Problem: Analyze execution order of sync code, microtasks, and macrotasks.
Core Idea:

Understand JavaScript event loop priorities

Sync → Microtasks → Macrotasks

1️⃣3️⃣ Debounce Function Using Closures

Problem: Delay execution until calls stop for a fixed duration.
Core Idea:

Clear previous timers

Execute only the last invocation

1️⃣4️⃣ Async Task Queue (Concurrency = 1)

Problem: Ensure async tasks run one at a time.
Core Idea:

Use a queue

Prevent concurrent execution with a running flag

1️⃣5️⃣ Immutable Array Grouping

Problem: Group array objects by a key without mutating input.
Core Idea:

Use reduce

Create new arrays for grouped results

🎯 Who Is This For?

Frontend Developers (React, Vue, Angular)

JavaScript Interview Preparation

System Design & Async Programming Practice

Anyone strengthening JS fundamentals beyond basics

🧑‍💻 Author

Sagnik Patra
