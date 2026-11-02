
let form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    function validate(id, errorId, pattern, message) {
        let field = document.getElementById(id);
        let error = document.getElementById(errorId);

        if (pattern.test(field.value)) {
            field.style.border = "2px solid green";
            error.innerText = " Valid";
            error.style.color = "green";
            return true;
        } else {
            field.style.border = "2px solid red";
            error.innerText = message;
            error.style.color = "red";
            return false;
        }
    }

    let nameValid = validate("name", "nameError",
        /^[A-Za-z]+$/, " Only alphabets allowed");

    let emailValid = validate("email", "emailError",
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/, " Invalid email");

    let phoneValid = validate("phone", "phoneError",
        /^\d{10}$/, " Enter exactly 10 digits");

    let passwordValid = validate("password", "passwordError",
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
        " Include uppercase, number and special character");

    if (nameValid && emailValid && phoneValid && passwordValid) {
        alert("Registration Successful!");
    }
});
