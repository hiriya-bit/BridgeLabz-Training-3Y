
 
let count = 0;


function increment() {
    count++;
    console.log("Count after increment:", count);
}


function decrement() {
    count--;
    console.log("Count after decrement:", count);
}


function counterDemo() {
    function showCount() {
        console.log("Current count inside nested function:", count);
    }

    increment();
    showCount();
}


increment();
increment();
decrement();
counterDemo();
