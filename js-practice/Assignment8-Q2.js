"use strict";

let menu = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 100 },
    { name: "Pasta", price: 150 }
];
function calculateBill(orderItems) {

    let prices = orderItems.map((itemName) => {

        let item = menu.find((food) => food.name === itemName);

        if (!item) {
            throw new Error("Invalid item: " + itemName);
        }

        return item.price;
    });

    let total = prices.reduce((sum, price) => {
        return sum + price;
    }, 0);

    return total;
}

try {

    let order = ["Pizza", "Burger", "Pasta"];

    let totalBill = calculateBill(order);

    console.log("Order:", order);
    console.log("Total Bill: Rs.", totalBill);

} catch (error) {

    console.log("Order Error:", error.message);

}
try {

    let invalidOrder = ["Pizza", "Sandwich"];

    console.log("Total:", calculateBill(invalidOrder));

} catch (error) {

    console.log("Order Error:", error.message);

}