# 📘 Callbacks in JavaScript – In-Depth Guide

## 🚀 What is a Callback?

A **callback** is a **function passed as an argument to another function**, to be **executed later** (after some operation completes).

> In JavaScript, **functions are first-class citizens**, which means they can be:
>
> * Assigned to variables
> * Passed as arguments
> * Returned from other functions

---

## 📌 Why Use Callbacks?

* Handle **asynchronous operations** like file reads, API requests, etc.
* Enable **custom behavior** without modifying a function's internals.
* Make your code **modular and reusable**.

---

## ✅ Basic Syntax

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // execute the callback
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Suraj", sayBye);
```

### Output:

```
Hello Suraj
Goodbye!
```

---

## 🧠 Callback vs Regular Function

| Callback Function   | Regular Function      |
| ------------------- | --------------------- |
| Passed as argument  | Called directly       |
| Often used in async | Used for direct logic |
| Executed later      | Executed immediately  |

---

## 🔄 Synchronous Callback Example

```javascript
function processUserInput(callback) {
  let name = "John";
  callback(name);
}

processUserInput(function (name) {
  console.log("Hello " + name);
});
```

✅ This runs immediately, in order, since there's no async involved.

---

## ⏳ Asynchronous Callback Example

```javascript
console.log("Start");

setTimeout(function () {
  console.log("Callback executed after 2 sec");
}, 2000);

console.log("End");
```

### Output:

```
Start
End
Callback executed after 2 sec
```

This shows how the callback is **deferred** and **does not block** the rest of the code.

---

## ⚠️ Callback Hell

When multiple callbacks are nested, readability suffers. This is known as **Callback Hell** or "Pyramid of Doom".

```javascript
loginUser("suraj", function (user) {
  getUserProfile(user, function (profile) {
    getProfilePosts(profile, function (posts) {
      // Deeply nested
    });
  });
});
```

### 🛠 Solution:

* **Promises**
* **Async/Await**

---

## 📥 Real-World Example – Reading Files (Node.js)

```javascript
const fs = require("fs");

fs.readFile("data.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log("File content:", data);
});
```

This demonstrates **I/O-based async callback usage**.

---

## 🧩 Custom Callback Function

```javascript
function calculator(a, b, callback) {
  let result = a + b;
  callback(result);
}

calculator(5, 3, function (res) {
  console.log("Sum is", res);
});
```

### You can also use named functions:

```javascript
function showResult(value) {
  console.log("Result is:", value);
}

calculator(5, 3, showResult);
```

---

## 🛡️ Error-First Callback Pattern

Common in Node.js:

```javascript
function doSomething(callback) {
  const error = false;
  const result = "Success";

  if (error) {
    callback("Something went wrong", null);
  } else {
    callback(null, result);
  }
}

doSomething(function (err, res) {
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }
});
```

---

## 🔁 Callback in Array Methods

### `forEach`:

```javascript
const nums = [1, 2, 3];
nums.forEach(function (num) {
  console.log(num * 2);
});
```

### `map`:

```javascript
const doubled = nums.map(function (num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6]
```

---

## 🎯 Advantages of Callbacks

* Asynchronous and non-blocking
* Flexible and customizable logic
* Good for event handling

---

## ⚠️ Disadvantages

* Callback Hell in deeply nested logic
* Harder to debug and trace
* Less readable compared to `async/await`

---

## 🆚 Callback vs Promise vs Async/Await

| Feature        | Callback      | Promise           | Async/Await       |
| -------------- | ------------- | ----------------- | ----------------- |
| Syntax         | Nested        | Chained `.then()` | Flat, readable    |
| Error Handling | Manual        | `.catch()`        | `try/catch` block |
| Readability    | Poor in depth | Moderate          | Best              |

---

## 🧪 Interview Tip

**Q:** What happens if a callback is not asynchronous?

**A:** The callback will run **synchronously**. Callbacks themselves are not inherently asynchronous — it's the environment (e.g., `setTimeout`, `fetch`, `fs.readFile`) that decides the timing.

---

## ✅ Summary

* A **callback** is a function passed to another function as an argument.
* Used heavily in **asynchronous operations**, especially in Node.js and browser events.
* Beware of **callback hell**; prefer Promises or `async/await` for large codebases.
* Common in array methods and event handling patterns.

---

## 🧠 Practice Exercise

```javascript
function customFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const filtered = customFilter([1, 2, 3, 4], function (num) {
  return num % 2 === 0;
});

console.log(filtered); // [2, 4]
```


