
let bonus = 5000;

function calculateSalary() {
    let salary = 40000;
    let isPermanent = true;

    if (isPermanent) {
        salary = salary + bonus;
    }

    console.log("Total Salary:", salary);

    isPermanent = false;
    console.log("Global Bonus:", bonus);
}

calculateSalary();
