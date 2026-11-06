"use strict";

/*
Predicted Output:

Script start
Script end
Promise callback
Timeout callback
*/

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);


Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

/*
Explanation:

1. Script start executes first.
2. setTimeout() schedules a macrotask.
3. Promise.then() schedules a microtask.
4. Script end executes.
5. JavaScript executes pending microtasks first.
6. Finally, the setTimeout callback executes.

Therefore, Promise callback executes before Timeout callback.
*/