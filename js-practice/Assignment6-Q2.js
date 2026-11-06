"use strict";

console.log("Start");
setTimeout(() => {
    console.log("setTimeout callback");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise callback");
});

// Synchronous log
console.log("Synchronous task");

console.log("End");

/*
Output:

Start
Synchronous task
End
Promise callback
setTimeout callback

Explanation:
1. Synchronous code executes first.
2. Promise.then() creates a microtask.
3. setTimeout() creates a macrotask.
4. After synchronous execution, microtasks execute first.
5. Then macrotasks execute.
*/