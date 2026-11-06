"use strict";
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.applyDiscount = function(percent) {

    let discount = (this.price * percent) / 100;

    return this.price - discount;
};

let product1 = new Product("Laptop", 50000);
let product2 = new Product("Mobile", 20000);
let product3 = new Product("Headphones", 3000);

console.log(product1.name,
    "Final Price:", product1.applyDiscount(10));

console.log(product2.name,
    "Final Price:", product2.applyDiscount(20));

console.log(product3.name,
    "Final Price:", product3.applyDiscount(15));

/*
Abstraction:
We only call applyDiscount() and provide
the discount percentage.

We don't need to write the discount formula
every time. The internal calculation is hidden
inside the method.
*/