```md
# JavaScript Assignments – Basics Practice

This repository contains 5 basic JavaScript assignments designed to strengthen your understanding of:

- Conditions (`if-else`)
- Loops
- `switch-case`
- Functions
- Simple business logic

Complete **all 5 assignments** and test them in the browser console or Node.js.

---

## 📘 Assignment 1: Number Check

Write a program to check whether a number is:

- Positive  
- Negative  
- Zero  

**Goal:**  
Take a number and print whether it is *Positive*, *Negative*, or *Zero*.

---

## 📘 Assignment 2: Even/Odd in Range

Print numbers from **1 to 20** and show whether each is Even or Odd.

**Expected Output Format:**
```

1 -> Odd
2 -> Even
3 -> Odd
...

````

**Goal:**  
Use a loop and conditional logic to determine even/odd numbers.

---

## 📘 Assignment 3: Role Access (Switch-Case)

Create a variable `role` with values like:

- `"ADMIN"`
- `"USER"`
- `"MANAGER"`

Print:

| Role     | Output            |
|----------|-------------------|
| ADMIN    | Full access        |
| USER     | Limited access     |
| MANAGER  | Moderate access    |
| Default  | Invalid role       |

**Goal:**  
Use `switch-case` to handle different roles.

---

## 📘 Assignment 4: Total Price Function

Create a function:

```js
calculateTotalPrice(price, quantity)
````

It should return the total price.

**Example:**

```js
console.log(calculateTotalPrice(150, 4)); // 600
```

**Goal:**
Understand parameters, return values, and function usage.

---

## 📘 Assignment 5: Coupon Discount Function

Create a function:

```js
applyCoupon(amount, couponCode)
```

### Rules:

| Coupon Code | Discount    |
| ----------- | ----------- |
| SAVE10      | 10% off     |
| SAVE20      | 20% off     |
| NONE        | No discount |

**Examples:**

```js
console.log(applyCoupon(1000, "SAVE10")); // 900  
console.log(applyCoupon(2000, "SAVE20")); // 1600  
console.log(applyCoupon(500, "NONE"));    // 500  
```

**Goal:**
Apply conditional logic inside functions to implement business rules.

---

## 🛠 How to Run

1. Create a `script.js` file.
2. Write all 5 assignments in it.
3. Run using:

   * Browser Console, or
   * Node.js:

     ```bash
     node script.js
     ```


