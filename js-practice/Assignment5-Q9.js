
// Parent class
class Person {

    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }
}

// Child class
class Student extends Person {

    constructor(name, branch) {

        super(name);

        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}

let student1 = new Student("Riya", "CSE");

student1.showName();
student1.showBranch();
