
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    const isBlank = typeof value === "string" && value.trim() === "";
    const isValid = value !== null &&
                    value !== undefined &&
                    !isBlank &&
                    !Number.isNaN(numberValue);

    console.log(`\nRecord ${i + 1}`);
    console.log(`Original: ${String(value)}`);
    console.log(`Number: ${numberValue}`);
    console.log(`Boolean: ${booleanValue}`);
    console.log(`String: "${stringValue}"`);

    if (isValid) {
        validNumbers.push(numberValue);
        console.log("Status: VALID");
    } else {
        invalidNumbers.push(value);
        console.log("Status: INVALID");
    }
}

console.log("\nValid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);
console.log("Valid count:", validNumbers.length);
console.log("Invalid count:", invalidNumbers.length);

// Q1 – Dynamic Data Parser
// 1. Number() converts a value into a number.
// 2. Boolean() converts a value into true or false.
// 3. String() converts a value into a string.
// 4. Number.isNaN() checks whether a value is NaN.
// 5. Valid numeric values are stored in validNumbers, while invalid values are stored in invalidNumbers.