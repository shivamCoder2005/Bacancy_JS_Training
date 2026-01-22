# OOPs IN PRE ES6 VS ES6+

## 1️⃣ Method duplication (Memory inefficiency)

### ❌ Old way (constructor function)

```js
function Greet(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`hello my name is ${this.name}`);
  };
}
```

📌 **Problem**

* Every time you do `new Greet()`,
  ➜ a **new copy of `greet()`** is created in memory.
* For 1000 objects → **1000 identical functions**.

🧠 Why?

* Functions defined inside constructor are stored **on each object**, not shared.

---

### ✅ ES6 class

```js
class Greet2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`hello my name is ${this.name}`);
  }
}
```

✔ `greet()` is stored on **`Greet2.prototype`**
✔ All instances **share one function**

📌 **Solved:** Memory wastage + performance issues

---

## 2️⃣ Prototype handling was confusing

### ❌ Old way (manual & error-prone)

```js
function Greet(name, age) {
  this.name = name;
}

Greet.prototype.greet = function () {
  console.log(this.name);
};
```

📌 **Problems**

* Developers often:

  * Forgot to use `prototype`
  * Overwrote `prototype` accidentally
* Hard to read and teach
* Very easy to break inheritance

---

### ✅ ES6 class

```js
class Greet2 {
  greet() {
    console.log(this.name);
  }
}
```

✔ Prototype logic is **implicit**
✔ Cleaner mental model
✔ Fewer bugs

📌 **Solved:** Boilerplate + cognitive load

---

## 3️⃣ `new` keyword misuse

### ❌ Old way

```js
const user = Greet("shivam", 21); // forgot `new`
```

💥 **Result**

* `this` points to:

  * `window` (non-strict)
  * `undefined` (strict mode)
* Silent bugs, very hard to debug

---

### ✅ ES6 class

```js
const user = Greet2("shivam", 21); // ❌ Error
```

✔ JavaScript **throws an error**

```
Class constructor Greet2 cannot be invoked without 'new'
```

📌 **Solved:** Dangerous silent failures

---

## 4️⃣ No real class semantics earlier

### ❌ Old way

* Constructor functions are just **functions**
* No:

  * `extends`
  * `super`
  * `static`
  * clear OOP structure

Inheritance looked like this 👇

```js
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
```

🤯 Hard to remember
🤯 Easy to break

---

### ✅ ES6 class (real OOP syntax)

```js
class Parent {
  sayHi() {}
}

class Child extends Parent {
  constructor() {
    super();
  }
}
```

✔ Clear
✔ Readable
✔ Familiar to Java / C++ devs (important for you as a CS student)

📌 **Solved:** Ugly inheritance patterns

---

## 5️⃣ Methods were enumerable (unexpected behavior)

### ❌ Old way

```js
for (let key in user1) {
  console.log(key);
}
```

Output:

```
name
age
greet   ❌
```

📌 Methods appeared in loops
Not ideal for data iteration

---

### ✅ ES6 class

```js
for (let key in user11) {
  console.log(key);
}
```

Output:

```
name
age
```

✔ Class methods are **non-enumerable by default**

📌 **Solved:** Cleaner object behavior

---

## 6️⃣ No strict mode by default

### ❌ Old way

* Constructor functions are **not strict**
* `this` bugs were common

---

### ✅ ES6 class

```js
class Test {}
```

✔ Classes run in **strict mode automatically**

📌 **Solved:** Safer execution

---

## 7️⃣ Readability & maintainability

### ❌ Old way

```js
function User() {}
User.prototype.login = function () {};
User.prototype.logout = function () {};
```

👎 Looks procedural
👎 Hard to scale in large projects

---

### ✅ ES6 class

```js
class User {
  login() {}
  logout() {}
}
```

✔ Looks like **real OOP**
✔ Better for teamwork
✔ Industry-standard

---

## ⚠️ Important Interview Truth

> **ES6 did NOT change JavaScript’s prototype system**

🔹 Classes are **syntactic sugar**
🔹 Internally still uses:

```js
User.prototype
```

📌 ES6 just made it:

* Safer
* Cleaner
* Less error-prone

---

# prototype inheritance

## 1️⃣ What “prototype inheritance” really means

**Objects in JavaScript inherit properties from other objects.**

❌ Not from classes
❌ Not by copying
✅ **By linking objects together**

This link is called the **prototype**.

---

## 2️⃣ The hidden link: `[[Prototype]]`

Every object has an internal reference called:

```
[[Prototype]]   (exposed as __proto__)
```

Example:

```js
const obj = {};
```

Internally:

```
obj → Object.prototype → null
```

This chain is called the **prototype chain**.

---

## 3️⃣ How property lookup works (MOST IMPORTANT)

When you access:

```js
obj.someProp
```

JavaScript does:

1️⃣ Look inside `obj`
2️⃣ If not found → go to `obj.__proto__`
3️⃣ Keep going until found or `null`

⚠️ **No copying happens** — only lookup.

---

## 4️⃣ Constructor + prototype (foundation)

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log("Hi, I am " + this.name);
};

const p1 = new Person("Shivam");
```

### Internally:

```
p1
 ├── name: "Shivam"
 └── __proto__ → Person.prototype
                       ├── sayHi()
                       └── constructor
```

So:

```js
p1.sayHi(); // works via prototype
```

---

## 5️⃣ Prototype inheritance (Parent → Child)

```js
function Animal() {}
Animal.prototype.eat = function () {
  console.log("Eating");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  console.log("Barking");
};

const d1 = new Dog();
```

### Prototype chain:

```
d1
 ↓
Dog.prototype
 ↓
Animal.prototype
 ↓
Object.prototype
 ↓
null
```

🔥 **Dog inherits from Animal via prototype chain**

---

## 6️⃣ Method lookup in inheritance

```js
d1.eat();
```

JS searches:

1️⃣ d1 → ❌
2️⃣ Dog.prototype → ❌
3️⃣ Animal.prototype → ✅
4️⃣ Calls `eat()` with `this = d1`

This is **inheritance + polymorphism** in JS.

---

## 7️⃣ ES6 class = same thing (syntax sugar)

```js
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}

const d1 = new Dog();
```

Internally JS creates:

```js
d1.__proto__ === Dog.prototype
Dog.prototype.__proto__ === Animal.prototype
```

Same prototype chain as before.

---

## 8️⃣ What `extends` actually does

`extends` sets **two links**:

1️⃣ **Instance inheritance**

```js
d1.__proto__ = Dog.prototype
```

2️⃣ **Prototype inheritance**

```js
Dog.prototype.__proto__ = Animal.prototype
```

That’s it.

---

## 9️⃣ Why `this` works correctly

Even though method lives on prototype:

```js
Animal.prototype.eat = function () {
  console.log(this.name);
};
```

When called as:

```js
d1.eat();
```

JS binds:

```
this → d1
```

So `this.name` works.

---

## 🔑 One rule to remember forever

> **JavaScript inheritance works by linking objects, not by copying methods.**

---

## 🔥 One-line interview answer

> Prototype inheritance in JavaScript allows objects to share behavior through a prototype chain, where property lookup traverses linked objects via their `[[Prototype]]`.

---

## 🧠 Visual summary

```
Instance
   ↓
Constructor.prototype
   ↓
Parent.prototype
   ↓
Object.prototype
   ↓
null
```

---

## ⚠️ Common mistakes (VERY IMPORTANT)

❌ Thinking classes copy methods
❌ Thinking `__proto__` is same as `.prototype`
❌ Modifying built-in prototypes in production

---
