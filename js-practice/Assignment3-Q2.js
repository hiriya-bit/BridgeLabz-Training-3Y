
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    for (const employee of employees) {
        if (!employee || !employee.name ||
            employee.salary === undefined ||
            employee.years === undefined) {
            throw new Error("Missing employee property");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error(`Invalid salary or years for ${employee.name}`);
        }

        const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
        const totalSalary = salary + bonus;

        console.log(`Employee: ${employee.name}`);
        console.log(`Salary: ₹${salary.toFixed(2)}`);
        console.log(`Experience: ${years} years`);
        console.log(`Bonus: ₹${bonus.toFixed(2)}`);
        console.log(`Total with bonus: ₹${totalSalary.toFixed(2)}`);
        console.log("-----------------------------");
    }
} catch (error) {
    console.log("Error:", error.message);
}

// Q2 – Employee Bonus Calculator
// 1. use strict prevents accidental creation of global variables.
// 2. Number() converts salary and years into numbers.
// 3. The ternary operator calculates a 10% bonus if experience is greater than 3 years; otherwise, it calculates a 5% bonus.
// 4. Template strings format employee details.
// 5. try...catch handles missing properties and invalid data