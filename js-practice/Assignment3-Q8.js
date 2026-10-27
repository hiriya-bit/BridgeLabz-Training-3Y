
"use strict";


function demo(a, b) {
    let total = 10;

    console.log("First argument:", a);
    console.log("Second argument:", b);
    console.log("Total:", total);
}

demo(5, 10);


function demoWithConst(a, b) {
    const total = a + b;
    console.log("Sum:", total);
}

demoWithConst(5, 10);

// Q8 – Strict Mode Showdown
// 1. Duplicate parameter names are allowed in ordinary non-strict functions but cause a SyntaxError in strict mode.
// 2. Assigning to an undeclared variable causes a ReferenceError in strict mode.
// 3. Deleting an unqualified variable is illegal.
// 4. let and const allow variables to be declared explicitly.
// 5. Using distinct parameter names and locally declared variables fixes the code.
