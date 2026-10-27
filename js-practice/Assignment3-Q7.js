
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {}
class DivisionByZeroError extends Error {}
class NegativeRootError extends Error {}

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new DivisionByZeroError("Cannot divide by zero");
            }
            return a / b;

        case "power":
            return a ** b;

        case "root":
            if (a < 0) {
                throw new NegativeRootError(
                    "Square root of a negative number is not real"
                );
            }
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new InvalidOperationError(
                `Unknown operation: ${operation}`
            );
    }
}

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${num1}, ${num2} => ${result}`);
    } catch (error) {
        console.log(`${operation}: ${error.constructor.name}`);
        console.log(`Reason: ${error.message}`);
    }
}

// Q7 – Smart Calculator
// 1. A switch statement handles different arithmetic operations.
// 2. Custom errors handle division by zero and square roots of negative numbers.
// 3. InvalidOperationError handles unknown operations.
// 4. try...catch catches errors and displays their messages.
// 5. Template strings print formatted calculation results.