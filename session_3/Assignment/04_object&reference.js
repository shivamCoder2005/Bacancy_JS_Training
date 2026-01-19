// Part 4: Objects & References

// Exercise 7: The "this" Detective

// Scenario: The code below is broken (it logs undefined).
// Explain why it fails.
// Fix it so it logs "Hello, Alex".

// const user = {
//     name: "Alex",
//     greet: () => {
//         console.log("Hello, " + this.name);
//     }
// };
// user.greet();

// Reason :-
// Arrow Function don't have their own this
// so they take it from it nearest lexical scope
// here it is window object and we don't have name property in window object
// that's why it gives undefined

// fix :- use normal funciton instead of arrow function

const user = {
  name: "Alex",
  greet() {
    console.log("Hello, " + this.name);
  },
};
user.greet();

// Exercise 8: The Safe Update

// Input:
// JavaScript

// Task:
// Create a new variable newSettings.
// Use the Spread Operator (...) to copy the properties from settings.
// Overwrite the theme to "dark" inside the new object.
// Verify settings.theme is still "light" (Immutable Check).

const settings = { theme: "light", notifications: true };
const newSettings = { ...settings }; // shallow copy

newSettings.theme = "dark";

console.log(settings.theme); // light
console.log(newSettings.theme); // dark

// Exercise 9

// Scenario: You have an inventory list.

// Task
// Filter out items that are out of stock (stock: 0).
// Map the remaining items to calculate their total value (price * stock).
// Reduce to find the total value of the entire inventory.

// Expected Output: 5500

const inventory = [
  { name: "Laptop", price: 1000, stock: 5 },
  { name: "Phone", price: 500, stock: 0 },
  { name: "Mouse", price: 50, stock: 10 },
];

output = inventory
  .filter((item) => item.stock > 0)
  .map((item) => {
    return { ...item, value: item.price * item.stock };
  })
  .reduce((acc, curr) => (acc += curr.value),0);

console.log(output);
