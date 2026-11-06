"use strict";


class MovieTicket {

    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}


MovieTicket.prototype.printTicket = function() {

    console.log("Movie:", this.movieName);
    console.log("Seat:", this.seatNo);
    console.log("Ticket Price: Rs.", this.price);

};

class OnlineTicket extends MovieTicket {

    constructor(movieName, seatNo, price, convenienceFee) {

        super(movieName, seatNo, price);

        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

let ticket1 = new OnlineTicket("Avengers", "A10", 200, 30);

ticket1.printTicket();

console.log("Convenience Fee: Rs.", ticket1.convenienceFee);
console.log("Total Amount: Rs.", ticket1.getTotalAmount());