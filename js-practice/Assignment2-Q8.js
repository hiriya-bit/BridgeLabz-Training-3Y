
 
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];


let totalCartValue = cart.reduce(
    (total, product) => total + product.price, 0
);

let finalTotal = 0
for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    let discountedPrice =
        product.price - (product.price * discount / 100);

    finalTotal += discountedPrice;

    console.log(
        product.item + ": Original = " + product.price +
        ", Discount = " + discount + "%" +
        ", Final Price = " + discountedPrice
    );
}


if (totalCartValue > 50000) {
    finalTotal = finalTotal - (finalTotal * 5 / 100);
}

console.log("Original Cart Value:", totalCartValue);
console.log("Final Cart Total:", finalTotal);
