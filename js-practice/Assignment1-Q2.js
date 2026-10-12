
let userName = "Riya";
let age = 20;
let isStudent = true;
let subjects = ["Java", "DBMS", "OS"];
let student = { name: "Riya", age: 20 };
let address = null;
let result;

let data = [
    { label: "Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Student", value: isStudent, type: typeof isStudent },
    { label: "Subjects", value: subjects, type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "Student Object", value: student, type: typeof student },
    { label: "Address", value: address, type: "null" },
    { label: "Result", value: result, type: typeof result }
];

console.table(data);