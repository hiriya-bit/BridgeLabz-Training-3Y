"use strict";

class Employee {

    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name, "is doing general employee work.");
    }
}
class Manager extends Employee {

    constructor(name, department) {
        super(name, department);
    }
    work() {
        console.log(this.name, "is managing the team.");
    }
}
let employee1 = new Employee("Aman", "IT");
let manager1 = new Manager("Priya", "HR");
employee1.work();
manager1.work();