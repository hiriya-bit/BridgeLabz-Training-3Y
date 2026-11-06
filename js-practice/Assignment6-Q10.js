"use strict";
function deliveryStep(stepName, message) {

    return new Promise((resolve, reject) => {

        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() > 0.2) {

                console.log(message);
                resolve();

            } else {

                reject(stepName + " failed!");

            }

        }, delay);

    });
}

async function runPipeline() {

    try {

        console.log("Start Pipeline");

        // Step 1: Take Order
        await deliveryStep("Take Order", "Step 1: Order taken");

        // Step 2: Prepare Food
        await deliveryStep("Prepare", "Step 2: Food prepared");

        // Step 3: Pack Food
        await deliveryStep("Pack", "Step 3: Package ready");

        // Step 4: Dispatch Order
        await deliveryStep("Dispatch", "Step 4: Out for delivery");

        // Step 5: Deliver Order
        await deliveryStep("Deliver", "Delivery completed!");

    } catch (error) {

        console.log("Pipeline failed!");
        console.log("Error:", error);

    }

}

runPipeline();

/*
Explanation:

1. runPipeline() is an async function.
2. Each deliveryStep() returns a Promise.
3. await pauses execution of runPipeline()
   until the current Promise settles.
4. After success, the next step starts.
5. If any Promise rejects, execution jumps
   directly to the catch block.
6. The JavaScript event loop handles timers
   while other code can continue executing.

Thus, all five steps execute sequentially.
*/