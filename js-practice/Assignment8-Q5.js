"use strict";
class User {

    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {

    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}
class Trip {

    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }
    calculateFare() {

        if (this.distance == null || this.distance < 0) {
            throw new Error("Invalid trip distance!");
        }

        let farePerKm = 15;

        return this.distance * farePerKm;
    }
}

let driver1 = new Driver("Rahul", 4.8, "Swift");
try {

    let trip1 = new Trip("Mathura", "Agra", 60);

    console.log("Driver:", driver1.name);
    console.log("Vehicle:", driver1.vehicle);
    console.log("Distance:", trip1.distance, "km");
    console.log("Total Fare: Rs.", trip1.calculateFare());

} catch (error) {

    console.log("Error:", error.message);

}

try {

    let trip2 = new Trip("Mathura", "Agra", -10);

    console.log(trip2.calculateFare());

} catch (error) {

    console.log("Error:", error.message);

}