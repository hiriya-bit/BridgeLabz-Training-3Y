
 
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;


let unsafeCondition =
    !isDoorLocked ||
    !isWindowClosed ||
    !isAlarmOn ||
    !isOwnerInside;


if (!unsafeCondition) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}


isDoorLocked = false;

unsafeCondition =
    !isDoorLocked ||
    !isWindowClosed ||
    !isAlarmOn ||
    !isOwnerInside;

if (!unsafeCondition) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}
