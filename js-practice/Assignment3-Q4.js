
"use strict";

function showMessage() {
    const greeting = "Welcome";
    console.log(greeting);
}

showMessage();

// Q4 – Debugging Mystery
// 1. The original code throws a ReferenceError because greeting is not declared.
// 2. Strict mode does not allow accidental global variable creation.
// 3. Declaring greeting with const fixes the error.
// 4. The variable is accessible within the function where it is declared.
// 5. VS Code's Watch panel and Call Stack help track variables and function execution.