
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyDiscount(percent) {
        return this.getTotal() -
            (this.getTotal() * percent / 100);
    }
}

// Creating cart
let cart = new Cart();

// Adding items
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1500, 1);

console.log("Original Total:", cart.getTotal());

function applyCoupon() {
    let coupon = document.getElementById("coupon").value;

    let pattern = /^(SAVE|DISC)(10|20)$/;

    let result = document.getElementById("result");

    if (pattern.test(coupon)) {
        let discount = Number(coupon.match(/\d+/)[0]);

        let finalTotal = cart.applyDiscount(discount);

        result.innerText =
            "Original Total: " + cart.getTotal() +
            "\nDiscount: " + discount + "%" +
            "\nFinal Total: " + finalTotal;
    }
    else {
        result.innerText = "Invalid Coupon Code!";
    }
}
