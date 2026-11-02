
let form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let seats = Number(document.getElementById("seats").value);

    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namePattern.test(name)) {
        alert("Name must contain alphabets only");
    }
    else if (!emailPattern.test(email)) {
        alert("Invalid Email");
    }
    else if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        alert("Seats must be between 1 and 10");
    }
    else {
        let booking = {
            name: name,
            email: email,
            seats: seats
        };

        document.getElementById("ticket").innerHTML =
            `Ticket Booked Successfully!<br>
             Name: ${booking.name}<br>
             Email: ${booking.email}<br>
             Seats: ${booking.seats}`;

        console.log(booking);
    }
});
