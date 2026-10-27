
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

class NegativeAmountError extends Error {}
class MissingPropertyError extends Error {}
class NullTransactionError extends Error {}

for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];

    try {
        if (transaction === null) {
            throw new NullTransactionError("Transaction is null");
        }

        if (transaction.id === undefined ||
            transaction.amount === undefined) {
            throw new MissingPropertyError("Missing id or amount");
        }

        if (transaction.amount < 0) {
            throw new NegativeAmountError("Negative amount");
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id}: VALID`);

    } catch (error) {
        invalid.push({
            index: i + 1,
            errorType: error.constructor.name,
            message: error.message
        });

        console.log(`Transaction ${i + 1}: ${error.message}`);
    }
}

console.log("\nValid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Successful count:", valid.length);
console.log("Failed count:", invalid.length);

// Q3 – Transaction Validator
// 1. A for loop checks each transaction.
// 2. Custom error classes identify negative amounts, missing properties, and null transactions.
// 3. Valid transactions are stored in the valid array.
// 4. Invalid transactions and their error messages are stored in the invalid array.
// 5. Breakpoints and the Watch panel help inspect variables during debugging.

