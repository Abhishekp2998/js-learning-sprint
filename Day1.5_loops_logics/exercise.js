// 🧠 Day 1.5 – Loops & Nested Loops

// ---------------------------------------------
// 🔁 For loop
// ---------------------------------------------
for (let i = 0; i < 5; i++) {
  // console.log("count", i);
}

// ---------------------------------------------
// 🔁 While loop
// ---------------------------------------------
let a = 0;
while (a <= 5) {
  // console.log("a is", a);
  a++;
}

// ---------------------------------------------
// 🔁 Do While loop
// ---------------------------------------------
let j = 0;
do {
  // console.log("J is", j);
  j++;
} while (j < 3);

// ---------------------------------------------
// 🔁 Nested Loop Example
// ---------------------------------------------
for (let i = 1; i <= 3; i++) { // outer loop
  // console.log("Outer loop:", i);

  for (let j = 1; j <= 2; j++) { // inner loop
    // console.log("   Inner loop:", j);
  }
}

// ---------------------------------------------
// ⚡ Mini Exercises
// ---------------------------------------------

// 1️⃣ Print 1 - 10 (Using all loops)
for (let i = 1; i <= 10; i++) {
  console.log("Using for loop, i =", i);
}

let w = 1;
while (w <= 10) {
  console.log("Using while loop, w =", w);
  w++;
}

let d = 1;
do {
  console.log("Using do while loop, d =", d);
  d++;
} while (d <= 10);

// ---------------------------------------------
// 2️⃣ Sum of all even numbers from 1–50
// ---------------------------------------------
let sum = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log("Sum of even numbers (1–50):", sum);

// ---------------------------------------------
// 3️⃣ Countdown from 10 to 1 using while
// ---------------------------------------------
let count = 10;
while (count >= 1) {
  console.log("Countdown:", count);
  count--;
}

// ---------------------------------------------
// 4️⃣ Check if a number is prime
// ---------------------------------------------
function isPrimeNum(num) {
  if (num <= 1) return false; // 0 and 1 are not prime

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log("Is 17 prime?", isPrimeNum(17));

// ---------------------------------------------
// 5️⃣ Print all prime numbers between 1–50
// ---------------------------------------------
for (let num = 2; num <= 50; num++) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

// ---------------------------------------------
// 6️⃣ Multiplication table (1–5)
// ---------------------------------------------
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += (i * j) + " ";
  }
  console.log(row);
}

// ---------------------------------------------
// 7️⃣ Star pattern
// *
// **
// ***
// ****
// *****
// ---------------------------------------------
let starPattern = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    starPattern += "*";
  }
  starPattern += "\n";
}
console.log(starPattern);

// ---------------------------------------------
// 8️⃣ Inverted star pattern
// *****
// ****
// ***
// **
// *
// ---------------------------------------------
let invertedStarPattern = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    invertedStarPattern += "*";
  }
  invertedStarPattern += "\n";
}
console.log(invertedStarPattern);

// ---------------------------------------------
// 9️⃣ Left-Aligned Triangle (with spaces)
//     *
//    **
//   ***
//  ****
// *****
// ---------------------------------------------
for (let i = 1; i <= 5; i++) {
  let pattern = "";

  for (let space = 1; space <= 5 - i; space++) {
    pattern += " ";
  }

  for (let star = 1; star <= i; star++) {
    pattern += "*";
  }

  console.log(pattern);
}
