
let form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    let usernamePattern = /^.{5,}$/;

    let passwordPattern =
        /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&]).{8,}$/;

    if (!usernamePattern.test(username)) {
        message.innerText = "Username must contain at least 5 characters";
        message.style.color = "red";
    }
    else if (!passwordPattern.test(password)) {
        message.innerText =
            "Password must have 8 characters, uppercase, lowercase, number and special character";
        message.style.color = "red";
    }
    else {
        message.innerText = "Login Successful!";
        message.style.color = "green";
    }
});
