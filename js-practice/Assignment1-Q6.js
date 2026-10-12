

let total = 7500;
let discountPercent
if (total >= 10000) {
    discountPercent = 25;
} else if (total >= 5000) {
    discountPercent = 15;
} else if (total >= 2000) {
    discountPercent = 5;
} else {
    discountPercent = 0;
}

let discount = Math.round(total * discountPercent / 100);
let finalPrice = Math.round(total - discount);

console.log("Original Total: ₹" + total);
console.log("Discount: " + discountPercent + "%");
console.log("Discount Amount: ₹" + discount);
console.log("Final Price: ₹" + finalPrice);
