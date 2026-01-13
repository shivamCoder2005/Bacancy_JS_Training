// How Var and Let Behaves With Timers in Loop

for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

/*
### 1️⃣ Using `var`

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

**Output:**

```
6
6
6
6
6
```

**Why?**

* `var` is **function-scoped**, not block-scoped.
* There is **only one shared variable `i`** for the whole loop.
* `setTimeout` does **not run immediately**.
  Even with `0ms`, it runs **after** the loop finishes.
* By the time callbacks execute, the loop has completed and `i` has become `6`.

So every callback prints the **same final value of `i` → 6**.

All callbacks close over the *same* `i`.
*/

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

/*
### 2️⃣ Using `let`

```js
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

**Output:**

```
1
2
3
4
5
```

**Why?**

* `let` is **block-scoped**.
* In a `for` loop, `let` creates a **new `i` for each iteration**.
* Each `setTimeout` callback captures a **different `i`**.
* When callbacks run later, they still remember their own `i` value.

So you get `1 2 3 4 5`.

*/
