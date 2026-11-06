"use strict";


function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

console.log("Callback Hell:");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate();
            });
        });
    });
});


function asyncStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName + " completed");
            resolve();
        }, 1000);
    });
}

async function runPipeline() {

    console.log("\nAsync/Await:");

    await asyncStage("Design");
    await asyncStage("Build");
    await asyncStage("Test");
    await asyncStage("Deploy");
    await asyncStage("Celebrate");

    console.log("Pipeline completed!");
}

runPipeline();

/*
Explanation:
Callback Hell uses deeply nested functions,
which makes code difficult to read and maintain.

Async/await makes asynchronous code look like
normal synchronous code and improves readability.
*/