
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

// Creating 5 employees
let employees = [
    new Employee(1, "Aman", "IT", 30000),
    new Employee(2, "Riya", "HR", 25000),
    new Employee(3, "Rahul", "Sales", 35000),
    new Employee(4, "Priya", "IT", 40000),
    new Employee(5, "Karan", "Finance", 28000)
];


employees.forEach(employee => {
    employee.applyBonus(10);
});


employees.forEach(employee => {
    console.log(employee.name, employee.getAnnualSalary());
});

let total = employees.reduce((sum, employee) => {
    return sum + employee.getAnnualSalary();
}, 0);

console.log("Total Annual Payout:", total);
