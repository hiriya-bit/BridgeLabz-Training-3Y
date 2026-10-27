
"use strict";

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter pyramid height (default 5): ", function (input) {
    const height = input.trim() === "" ? 5 : Number(input);

    if (!Number.isInteger(height) || height < 1) {
        console.log("Please enter a positive integer.");
        rl.close();
        return;
    }

    console.log("\nPyramid:");

    for (let i = 1; i <= height; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "* ";
        }

        console.log(row.trimEnd());
    }

    rl.close();
});

// Q6 – Pyramid Pattern Generator
// 1. Nested loops generate the pyramid pattern.
// 2. The outer loop controls the number of rows.
// 3. The inner loop adds stars to each row.
// 4. let is block-scoped, whereas var is function-scoped.
// 5. User input controls the pyramid height, with a default value of 5.
// 6. Strict mode catches assignments to undeclared variables.