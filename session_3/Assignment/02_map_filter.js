// Exercise 3: The Price Formatter

// Input: [10, 20, 30]
// Task: Use .map() to add a "$" sign to the front of every number.
// Expected Output: ["$10", "$20", "$30"]

input = [10, 20, 30];

formatted_price = input.map((price) => {
  return "$" + price.toString();
});

console.log(formatted_price);

// Exercise 4: The Clean-Up Crew

// Input: [25, -5, 18, 0, 40]
// Task: Use .filter() to keep only valid ages (positive numbers > 0).
// Expected Output: [25, 18, 40]

input = [25, -5, 18, 0, 40];

correct_ages = input.filter((age) => age > 0);

console.log(correct_ages);

// Exercise 5: The "One-Liner" Chain

// Input: [-10, 20, 50, -5]

// Task:
// Filter out negative numbers.
// Map the remaining numbers to double them (x * 2).

// Expected Output: [40, 100]

input = [-10, 20, 50, -5];

output = input.filter((num) => num > 0).map((num) => num * 2);

console.log(output)
