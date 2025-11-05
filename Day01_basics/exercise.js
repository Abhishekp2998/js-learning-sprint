// Day 1 — JS Basics & Conditionals
// ---------------------------------
// Author: Abhishek Panchal
// Repo: js-day01-basics

// 1️⃣ Runtime examples
// Browser vs Node
// (In Node, 'window' is undefined; 'global' exists)
console.log(typeof window === "undefined" ? "Running in Node" : "Running in Browser");

// 2️⃣ Data types
let str = "Hello JS";
let num = 42;
let bool = true;
let nothing = null;
let notDefined;
let bigNumber = 12345678901234567890n;

console.log(typeof str, typeof num, typeof bool, typeof nothing, typeof notDefined, typeof bigNumber);

// 3️⃣ let / const / var
let city = "Mumbai";
const country = "India";
// var should be avoided — it ignores block scope
{
  var oldVar = "Legacy var";
  let newLet = "Scoped let";
}
// console.log(newLet); // ❌ ReferenceError
console.log(oldVar); // ✅ works because var is function-scoped

// 4️⃣ Truthy / Falsy
let values = [false, 0, "", null, undefined, NaN, "hello", 123, [], {}];
values.forEach(v => console.log(v, "=>", Boolean(v)));

// 5️⃣ Comparison (== vs ===)
console.log(2 == "2");  // true (loose)
console.log(2 === "2"); // false (strict)

// 6️⃣ Conditionals
let age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Ternary
let msg = age >= 18 ? "Can vote" : "Cannot vote";
console.log(msg);

// Switch
let color = "green";
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown color");
}

// ---------------------------------
// 🧩 Exercises
// ---------------------------------

// 🟢 Problem 1: FizzBuzz
// Print numbers from 1 to 100
// If divisible by 3 → "Fizz"
// If divisible by 5 → "Buzz"
// If divisible by both → "FizzBuzz"
// else print the number
function fizzBuzz() {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  if (randomNum % 3 === 0 && randomNum % 5 === 0){ return "FizzBuzz" } 
  else if (randomNum % 3 === 0){ return "Fizz" } 
  else if (randomNum % 5 === 0){ return "Buzz" } 
  else{ return randomNum + " is nor a fizz nor a buzz nor a fizzbuzz" }
}
fizzBuzz();

// 🟢 Problem 2: Largest of 3 numbers
// Use conditionals to find the largest among a, b, c
function largestOfThree(a, b, c) {
    if (a === b && b === c) { return "All numbers are equals" }
    else if (a >= b && a >= c) {return `${a} is the largest number`}
    else if (b >= a && b >= c) {return `${b} is the largest number`}
    else { return `${c} is the largest number`}
}
console.log("Largest:", largestOfThree(5, 9, 3));

// 🟢 Problem 3: Palindrome Check
// Return true if a string reads the same backward and forward
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = cleaned.split("").reverse().join("");
    if (cleaned === reversed){ return "Yes, its a Palindrome" }
    else {return "No, its not a Palindrome"}
}
console.log("Is 'madam' palindrome?", isPalindrome("madam"));
