
Array.prototype.myMap = function(callback) {

    let result = [];

    for (let i = 0; i < this.length; i++) {

        result.push(callback(this[i], i, this));
    }

    return result;
};

let numbers = [1, 2, 3];
let doubled = numbers.myMap(function(num) {
    return num * 2;
});

let squared = numbers.myMap(num => num * num);

console.log("Doubled:", doubled);
console.log("Squared:", squared);
