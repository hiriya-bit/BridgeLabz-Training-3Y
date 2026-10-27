
"use strict";


var score = 50;

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

var status = "ready";

console.log(score);
announce();
startGame();


const arrowAnnounce = () => {
    console.log("Game started using arrow function");
};

const arrowStartGame = () => {
    console.log(status);
};

arrowAnnounce();
arrowStartGame();

// Q5 – Hoisting Lab: The Sequence Trap
// 1. var declarations are hoisted and initialized with undefined.
// 2. Function declarations are hoisted with their definitions.
// 3. let and const remain in the temporal dead zone until initialized.
// 4. Calling a function before a let variable is initialized can cause a ReferenceError.
// 5. Arrow functions assigned to const must be initialized before they are called.
