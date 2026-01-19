# JavaScript Training Session – Summary

This README documents what we explored today in the JavaScript training session.

---

## 1. `map`, `filter`, and `reduce`

These are **array methods** used to process data in a functional way. They do **not mutate** the original array.

### 1.1 `map()`

**Purpose:** Transform each element of an array.

* Returns a **new array of the same length**
* Use when you want to **modify each item**

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8]
```

**Use cases:**

* Convert data formats
* Extract properties from objects
* Apply calculations

---

### 1.2 `filter()`

**Purpose:** Select elements that satisfy a condition.

* Returns a **new array (same or smaller length)**
* Use when you want to **remove unwanted items**

```js
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]
```

**Use cases:**

* Remove invalid data
* Apply conditions (active users, completed tasks, etc.)

---

### 1.3 `reduce()`

**Purpose:** Reduce an array to a **single value**.

* Can return **any type** (number, object, array)
* Use when you need to **accumulate results**

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// 10
```

**Use cases:**

* Sum / average values
* Grouping data
* Counting occurrences
* Creating objects from arrays

---

### 1.4 Key Differences

| Method | Returns | Best Used For              |
| ------ | ------- | -------------------------- |
| map    | Array   | Transform each item        |
| filter | Array   | Select specific items      |
| reduce | Any     | Combine into single result |

**Rule of Thumb:**

* Need same number of elements → `map`
* Need fewer elements → `filter`
* Need one final value → `reduce`

---

## 2. Rest Operator (`...`)

**Purpose:** Collect multiple values into a single variable.

### 2.1 In Function Parameters

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4); // 10
```

* Gathers arguments into an array
* Helps avoid using `arguments`

---

### 2.2 In Destructuring

```js
const [first, ...rest] = [1, 2, 3, 4];
// first = 1
// rest = [2, 3, 4]
```

---

### 2.3 Rest vs Spread

| Rest                    | Spread                 |
| ----------------------- | ---------------------- |
| Collect values          | Expand values          |
| Used in function params | Used in function calls |

---

## 3. `this` Keyword – The Confusion

`this` refers to **the context in which a function is executed**, not where it is defined.

---

### 3.1 Global Context

```js
console.log(this);
```

* In browser → `window`
* In Node.js → `{}` (module object)

---

### 3.2 Inside an Object Method

```js
const user = {
  name: "Alex",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // Alex
```

`this` refers to the object **before the dot**.

---

### 3.3 Regular Function vs Arrow Function

#### Regular Function

```js
function show() {
  console.log(this);
}
```

* `this` depends on **how the function is called**

#### Arrow Function

```js
const show = () => {
  console.log(this);
};
```

* Arrow functions **do not have their own `this`**
* They inherit `this` from the surrounding scope

---

### 3.4 Common Mistake

```js
const obj = {
  value: 10,
  method: () => {
    console.log(this.value);
  }
};

obj.method(); // undefined
```

Arrow functions should **not** be used as object methods when you need `this`.

---



