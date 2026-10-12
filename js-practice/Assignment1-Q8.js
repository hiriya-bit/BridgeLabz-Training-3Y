

let currentSalary = 30000;
let incrementRate = 10; 

let salaryData = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * incrementRate / 100;

    currentSalary = Math.round(currentSalary);

    salaryData.push({
        Year: year,
        Salary: currentSalary
    });
}

console.table(salaryData);
