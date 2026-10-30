
// First constructor
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

// Second constructor
function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showSubject = function() {
    console.log("Subject: " + this.subject);
};

// Third constructor
function Professor(name, subject, experience) {
    Faculty.call(this, name, subject);
    this.experience = experience;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showExperience = function() {
    console.log("Experience: " + this.experience + " years");
};

let professor1 = new Professor("Amit", "Java", 10);

professor1.showName();
professor1.showSubject();
professor1.showExperience();
