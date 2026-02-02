// Exercise 6: The Shopping Cart

// Input: [100, 200, 50]
// Task: Use .reduce() to sum the values starting from 0.
// Expected Output: 350

input = [100, 200, 50];

sum = input.reduce((acc, num) => (acc += num));

console.log(sum);
