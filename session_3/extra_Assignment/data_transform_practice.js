// problem using map,filter and reduce

// problem 1
// task : Group students based on their grade.

//Input:
// [
//   { name: "Aman", grade: "A" },
//   { name: "Riya", grade: "B" },
//   { name: "Karan", grade: "B" }
//   { name: "Shivam", grade: "A" },
//   { name: "Manav", grade: "C" },
//   { name: "Parth", grade: "C" }
// ]

// Output:
// {
//   A: ["Aman", "Shivam"],
//   B: ["Riya","Kiran"],
//   C: ["Manav","Parth"]
// }

const students = [
  { name: "Aman", grade: "A" },
  { name: "Riya", grade: "B" },
  { name: "Karan", grade: "B" },
  { name: "Shivam", grade: "A" },
  { name: "Manav", grade: "C" },
  { name: "Parth", grade: "C" },
];

const gradeHistory = students.reduce((obj, student) => {
  if (obj[student.grade]) {
    obj[student.grade].push(student.name);
  } else {
    obj[student.grade] = [student.name];
  }
  return obj;
}, {});

console.log(gradeHistory);

// problem 2:-
// Find the Most Expensive Product (reduce) Return the product with the highest price.

// Input:
// [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
//   { name: "Tablet", price: 30000 }
// ]

// Output:
// { name: "Laptop", price: 50000 }

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 30000 },
];

const myProduct = products.reduce((acc, product) => {
  if (!acc || product.price > acc.price) return product;
  return acc;
}, null);

console.log(myProduct);

// problem 3:-
// Flatten a nested array one level deep and calculate the sum

// Input: [[1, 2], [3, 4], [5]]
// Output: 15

const nested_arr = [[1, 2], [3, 4], [5]];

const flatten_arr = nested_arr.reduce((acc, curr) => {
  return [...acc, ...curr];
}, []);

console.log(flatten_arr);

// problem 4:-

// Grouping Objects by a Key

// input

const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "admin" },
  { id: 4, name: "Dave", role: "user" },
];

// output

// {
//   admin: ["Alice", "Charlie"],
//   user: ["Bob", "Dave"]
// }

const grouped_user = users.reduce((acc, curr) => {
  if (acc[curr.role]) {
    acc[curr.role].push(curr.name);
  } else {
    acc[curr.role] = [curr.name];
  }
  return acc;
}, {});

console.log(grouped_user);

// problem 5:-

// Flatten, Filter & Transform

// task :- Get names of employees earning more than 75k

// input
const departments = [
  {
    name: "Engineering",
    employees: [
      { name: "Alice", salary: 90000 },
      { name: "Bob", salary: 70000 },
    ],
  },
  {
    name: "HR",
    employees: [
      { name: "Charlie", salary: 90000 },
      { name: "Bob", salary: 70000 },
    ],
  },
  {
    name: "Coding",
    employees: [
      { name: "Ram", salary: 90000 },
      { name: "Shayam", salary: 70000 },
      { name: "Sita", salary: 80000 },
    ],
  },
];

// output ["Alice", "Charlie", "Ram", "Sita"];

const emp_earn_more_75k = departments
  .reduce((acc, dept) => {
    return [...acc, ...dept.employees];
  }, [])
  .map((emp) => {
    if (emp.salary > 75000) return emp.name;
    else return null;
  })
  .filter((el) => el != null);

console.log(emp_earn_more_75k);

// problem 6
// Conditional Object Transformation

// input

const users_status = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
  { name: "Shivam", active: true },
  { name: "Manav", active: false },
  { name: "Parth", active: true },
];

// output

// {
//   activeUsers: ["Alice", "Charlie", "Shivam", "Parth"];
//   inactiveUsers: ["Bob","Manav"]
// }

const user_history = users_status.reduce(
  (acc, curr) => {
    if (curr.active == true) {
      acc["activeUsers"].push(curr.name);
    } else acc["inactiveUsers"].push(curr.name);
    return acc;
  },

  {
    activeUsers: [],
    inactiveUsers: [],
  },
);

console.log(user_history);

// problem 7 :-

// Remove Duplicates by Property

// input

const items = [
  { id: 1, name: "A" },
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 3, name: "C" },
];

// output
// [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 3, name: "C" },
// ];

const unique_items = items.reduce((acc, curr) => {
  const isExist = acc.find((i) => i.id == curr.id);
  if (!isExist) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(unique_items);

// problem 8 :- Transaction Management

// input
const transactions = [
  { userId: 1, category: "food", type: "debit", amount: 200 },
  { userId: 1, category: "food", type: "debit", amount: 150 },
  { userId: 1, category: "shopping", type: "debit", amount: 500 },
  { userId: 1, category: "salary", type: "credit", amount: 1000 },
  { userId: 2, category: "food", type: "debit", amount: 300 },
  { userId: 2, category: "shopping", type: "debit", amount: 400 },
  { userId: 2, category: "salary", type: "credit", amount: 1200 },
];

// output
// {
//   1: {
//     food:     { total: -350, count: 2 },
//     salary:   { total: 1000, count: 1 },
//     shopping: { total: -500, count: 1 }
//   },
//   2: {
//     food:     { total: -300, count: 1 },
//     shopping: { total: -400, count: 1 },
//     salary:   { total: 1200, count: 1 }
//   }
// }

const formatted_transaction = transactions.reduce((acc, t) => {
  let final_amount = t.type == "credit" ? t.amount : 0 - t.amount;

  if (!acc[t.userId]) {
    acc[t.userId] = {};
  }

  if (!acc[t.userId][t.category]) {
    acc[t.userId][t.category] = {
      total: 0,
      count: 0,
    };
  }

  acc[t.userId][t.category].total += final_amount;
  acc[t.userId][t.category].count += 1;
  return acc;
}, {});

console.log(formatted_transaction);
