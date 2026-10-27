
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const parsed = JSON.parse(rawData[i]);

        if (parsed.user === undefined || parsed.age === undefined) {
            throw new Error("Missing user or age key");
        }

        const age = Number(parsed.age);

        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age");
        }

        const user = {
            user: parsed.user,
            age: age
        };

        cleanData.push(user);

        if (age < 18) {
            under18.push(user);
        }

        console.log(`Line ${i + 1}: Valid JSON`);

    } catch (error) {
        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Line ${i + 1}: ${error.message}`);
    }
}

console.log("\nClean data:", cleanData);
console.log("Error report:", errors);
console.log("Valid count:", cleanData.length);
console.log("Error count:", errors.length);
console.log("Users under 18:", under18);

// Q9 – JSON Audit
// 1. JSON.parse() converts JSON strings into JavaScript objects.
// 2. try...catch handles invalid JSON and validation errors.
// 3. Missing user or age keys are reported as errors.
// 4. Valid entries are stored in the cleanData array.
// 5. Number() converts age values into numbers.
// 6. Users under 18 are stored in the under18 array.
// 7. Debugging shows how execution moves to catch when an error occurs.