// Day 02 — Arrays & Loops
// -----------------------
// Author: Abhishek Panchal
// Repo: js-day02-arrays

// -----------------------
// 🧠 Learnings
// -----------------------
// 1️⃣ forEach(): iterate over arrays
// 2️⃣ map(): transform arrays to new arrays
// 3️⃣ filter(): extract items based on condition
// 4️⃣ reduce(): aggregate array values into a single result

// -----------------------
// forEach() Exercises
// -----------------------

// Print index + element
const cities = ["Mumbai", "Delhi", "Bangalore", "Pune"];
cities.forEach((city, index) => {
    console.log(`${index}: ${city}`);
});

// Double each number
const nums = [2, 4, 6, 8, 10];
let doubledNums = [];
for (let i = 0; i < nums.length; i++) {
    doubledNums.push(nums[i] * 2);
}
console.log(doubledNums);

// Sum all numbers
const prices = [100, 200, 300, 400];
let totalPrice = 0;
prices.forEach(price => totalPrice += price);
console.log(totalPrice);

// Strings longer than 5 letters
const fruits = ["apple", "banana", "kiwi", "mango", "orange"];
fruits.forEach(fruit => {
    if (fruit.length > 5) console.log(fruit);
});

// Capitalize names
const names = ["rahul", "sita", "aman"];
names.forEach(name => console.log(name.toUpperCase()));


// -----------------------
// map() Exercises
// -----------------------

// Convert Celsius to Fahrenheit
const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(degree => (degree * 9/5) + 32);
console.log(fahrenheit);

// Create array of name lengths
const nameArr = ["Abhi", "Riya", "Jonathan", "asdadadads"];
const nameLengths = nameArr.map(name => name.length);
console.log(nameLengths);

// Append star to names
const nameStars = nameArr.map(name => name + " ⭐");
console.log(nameStars);

// Extract 'name' property from objects
const objectArr = [{name: "A"}, {name: "B"}, {name: "C"}];
const objectNames = objectArr.map(obj => obj.name);
console.log(objectNames);


// -----------------------
// filter() Exercises
// -----------------------

// Odd numbers
const numbers = [1, 2, 3, 4, 5, 6, 7];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

// Names longer than 4 letters
const nameList = ["Amy", "Michael", "Sara", "John", "Jonathan"];
const longerNames = nameList.filter(name => name.length > 4);
console.log(longerNames);

// Products priced above 10000
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Phone", price: 25000 }
];
const expensiveProducts = products.filter(product => product.price > 10000);
console.log(expensiveProducts);

// Fruits containing letter 'a'
const fruitArr = ["apple", "banana", "kiwi", "mango"];
const aFruits = fruitArr.filter(fruit => fruit.includes("a"));
console.log(aFruits);


// -----------------------
// reduce() Exercises
// -----------------------

// Sum all numbers
const sumArr = [5, 10, 15, 20];
const sum = sumArr.reduce((acc, num) => acc + num, 0);
console.log(sum);

// Multiply all numbers
const multiplyArr = [2, 3, 4];
const product = multiplyArr.reduce((acc, num) => acc * num, 1);
console.log(product);

// Count total letters in strings
const lettersArr = ["apple", "banana", "kiwi"];
const totalLetters = lettersArr.reduce((acc, str) => acc + str.length, 0);
console.log(totalLetters);

// Total price of products
const totalProductPrice = products.reduce((acc, item) => acc + item.price, 0);
console.log(totalProductPrice);

// Flatten a 2D array
const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened);
