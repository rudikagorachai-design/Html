// --- Part 1: Time-based Greeting ---

// 1. Ask for the user's name
// When the box pops up, type: Rubika Gorachan
let name = prompt("What is your name?");

// 2. Get the current hour (0-23)
let hour = new Date().getHours();

// 3. Logic to print the personalized greeting to the console
if (hour < 12) {
    console.log("Good morning, " + name + "!");
} else if (hour < 18) {
    console.log("Good afternoon, " + name + "!");
} else {
    console.log("Good evening, " + name + "!");
}


// --- Part 2: Age and Days Lived Verification ---

// 4. Ask for birth year 
// When the box pops up, type: 2005
// (This will make your age 21 because 2026 - 2005 = 21)
let birthYear = prompt("What year were you born?");

// 5. Calculate age using the year 2026 as required by the lab
let age = 2026 - birthYear; 

// 6. Calculate approximate days lived
let daysLived = age * 365;

// 7. Print results to console
console.log("You have lived for approximately " + daysLived + " days!");

// 8. Age verification logic
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}