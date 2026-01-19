// Exercise 1: The URL Slug Builder

// Input: "JavaScript For Beginners"

// Task:
// Convert the string to lowercase.
// Split the string into words.
// Join the words back together using hyphens (-).

// Expected Output: "javascript-for-beginners"

input = "JavaScript For Beginners";

input_lowercase = input.toLowerCase();

splitted_input = input_lowercase.split(" ");

slug = splitted_input.join("-");

console.log(slug);

// Exercise 2: Pagination Logic

// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Task: Use .slice() to extract the items at indices 3, 4, and 5.
// Expected Output: [4, 5, 6]

input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
page2 = input.slice(3, 6);

console.log(page2);
