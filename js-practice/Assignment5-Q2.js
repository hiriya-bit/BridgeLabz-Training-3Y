
function applyOperation(numbers, operation) {

    return numbers.map(operation);
}
let numbers = [1, 2, 3, 4];
let double = applyOperation(numbers, function(num) {
    return num * 2;
});

let square = applyOperation(numbers, function(num) {
    return num * num;
});

console.log("Doubled:", double);
console.log("Squared:", square);
