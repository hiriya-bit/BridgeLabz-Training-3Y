"use strict";
class FitnessAnalytics {

    constructor(workoutData) {

        if (workoutData.length === 0) {
            throw new Error("Workout dataset cannot be empty!");
        }

        this.workoutData = workoutData;
    }

    getActiveUsers() {

        return this.workoutData.filter((user) => {
            return user.steps > 7000;
        });
    }

    getAverageCalories() {

        let totalCalories = this.workoutData.reduce((total, user) => {
            return total + user.calories;
        }, 0);

        return totalCalories / this.workoutData.length;
    }

    getUserSummary() {

        return this.workoutData.map((user) => {

            return user.user + " walked " +
                user.steps + " steps and burned " +
                user.calories + " calories.";

        });
    }
}

let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];
try {

    let fitness = new FitnessAnalytics(workoutData);

    console.log("Active Users:");
    console.table(fitness.getActiveUsers());

    console.log("Average Calories:");
    console.log(fitness.getAverageCalories());

    console.log("User Summary:");
    fitness.getUserSummary().forEach((summary) => {
        console.log(summary);
    });

} catch (error) {

    console.log("Error:", error.message);

}