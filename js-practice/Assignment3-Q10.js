
"use strict";

function outer() {
    console.log("Outer before initialization:", count);

    var count = 5;

    function inner() {
        console.log("Inner before initialization:", count);

        var count = 10;

        console.log("Inner after initialization:", count);
    }

    inner();

    console.log("Outer after inner:", count);
}

outer();

function outerArrow() {
    console.log("Arrow version - outer before initialization:", count);

    var count = 5;

    const inner = () => {
        console.log("Arrow inner sees outer count:", count);
    };

    inner();

    console.log("Arrow version - outer after inner:", count);
}

outerArrow();

// Q10 – Nested Hoisting and Closures
// 1. The outer count initially prints undefined because its var declaration is hoisted.
// 2. The inner function has its own local count variable, which also initially prints undefined.
// 3. After initialization, the inner count becomes 10, while the outer count remains 5.
// 4. Arrow functions use lexical scope and can access variables from their surrounding function.
// 5. The Call Stack shows how execution moves from the global context to outer(), then to inner(), and back to outer().
// 6. Breakpoints and the Watch panel help observe variable values and function execution.