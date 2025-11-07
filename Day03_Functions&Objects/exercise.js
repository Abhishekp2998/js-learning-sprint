/* 
---------------------------------------------
📘 DAY 03 – FUNCTIONS | ARROW FUNCTIONS | CLOSURES | OBJECTS
---------------------------------------------

🧠 WHAT WE LEARNED:

✔️ Functions — Declaration, Expression & Arrow Functions  
✔️ Parameters & Return values  
✔️ Closures — Returning a function, maintaining state  
✔️ Objects — Properties, Methods & this keyword  
✔️ Iterating through Objects  
✔️ Array of Objects – Accessing values  
✔️ Combining loops & objects  
---------------------------------------------
*/


// 1️⃣ Function: Multiply two numbers
// ---------------------------------
let multiply = (a, b) => a * b;
console.log("1️⃣ Multiply Result:", multiply(4, 2));



// 2️⃣ Arrow Function: Check Even or Odd
// ---------------------------------
let checkNum = (num) => num % 2 === 0 ? "Even Number" : "Odd Number";
console.log("2️⃣ Check Number:", checkNum(13));



// 3️⃣ Closure: Counter Example
// ---------------------------------
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log("3️⃣ Closure Counter:");
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3



// 4️⃣ Object with Method
// ---------------------------------
let student = {
    name: "Abhishek",
    age: 27,
    marks: 100,
    getSummary() {
        console.log(`The student's name is ${this.name}, he is ${this.age} years old and scored ${this.marks} marks.`);
    }
};

console.log("4️⃣ Object Method:");
student.getSummary();



// 5️⃣ Array of Objects + forEach
// ---------------------------------
let studentsArray = [
    { name: "Abhishek", age: 27 },
    { name: "Aniket", age: 27 },
    { name: "Pratiksha", age: 27 },
];

console.log("5️⃣ Array of Objects – Print Names:");
studentsArray.forEach(student => console.log(student.name));



// 6️⃣ Loop through Object Keys & Values
// ---------------------------------
let sampleObj = { name: "Abhi", age: 27, country: "India" };

console.log("6️⃣ Looping through Object:");
for (let key in sampleObj) {
    console.log(`${key}: ${sampleObj[key]}`);
}



// 🧩 MINI EXERCISES
// ---------------------------------

// ➤ 1. Create a function to find factorial using loop.
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log("🧩 Factorial of 5:", factorial(5));


// ➤ 2. Closure that adds numbers together each time.
function adder() {
    let total = 0;
    return function(num) {
        total += num;
        return total;
    };
}
const add = adder();
console.log("🧩 Closure Adder:");
console.log(add(5)); // 5
console.log(add(10)); // 15


// ➤ 3. Create object 'car' with properties and method to print description.
let car = {
    brand: "Tesla",
    model: "Model 3",
    color: "Black",
    getInfo() {
        console.log(`🚗 ${this.brand} ${this.model} in ${this.color} color.`);
    }
};
car.getInfo();


// ➤ 4. From array of objects, get only names where age > 25.
let users = [
    { name: "Amit", age: 22 },
    { name: "Priya", age: 30 },
    { name: "Karan", age: 28 }
];
let olderUsers = users.filter(user => user.age > 25).map(user => user.name);
console.log("🧩 Users age > 25:", olderUsers);


// ➤ 5. Loop through object using Object.keys() and Object.values()
let book = { title: "Atomic Habits", author: "James Clear", pages: 250 };
console.log("🧩 Object.keys() & Object.values():");
console.log(Object.keys(book));
console.log(Object.values(book));
