"use strict";


function getBugs() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let apiSuccess = Math.random() > 0.3;

            if (apiSuccess) {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            } else {
                reject("API failed to fetch bugs!");
            }

        }, 1000);
    });
}


getBugs()
    .then((bugs) => {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });