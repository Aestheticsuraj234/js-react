# ⏱️ Timer Methods in JavaScript – Complete Guide

JavaScript provides **built-in timer functions** to schedule code execution at a future time.

---

## 🧩 Types of Timer Methods

| Method            | Description                                      |
| ----------------- | ------------------------------------------------ |
| `setTimeout()`    | Executes a function **once** after a delay       |
| `setInterval()`   | Executes a function **repeatedly** at intervals  |
| `clearTimeout()`  | Cancels a `setTimeout()` before it executes      |
| `clearInterval()` | Cancels a `setInterval()` from repeating further |

---

## ✅ `setTimeout()`

Used to delay execution **once** after a specified time (in **milliseconds**).

### 🔹 Syntax:

```javascript
setTimeout(callback, delay, arg1, arg2, ...);
```

### 🔹 Example:

```javascript
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);
```

⏱ Waits **2 seconds**, then logs the message.

---

## ❌ `clearTimeout()`

Used to **cancel** a `setTimeout` before it executes.

### 🔹 Example:

```javascript
const timeoutId = setTimeout(() => {
  console.log("Won’t execute if cleared");
}, 3000);

clearTimeout(timeoutId); // Cancels it
```

---

## 🔁 `setInterval()`

Executes a function **repeatedly** every `n` milliseconds.

### 🔹 Syntax:

```javascript
setInterval(callback, interval, arg1, arg2, ...);
```

### 🔹 Example:

```javascript
const intervalId = setInterval(() => {
  console.log("Repeats every second");
}, 1000);
```

---

## ❌ `clearInterval()`

Used to **stop** a `setInterval()` from running.

### 🔹 Example:

```javascript
const intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Stopped after 5 seconds");
}, 5000);
```

---

## 🧪 Advanced Usage: With Parameters

You can pass arguments to the callback:

```javascript
function greet(name) {
  console.log("Hello " + name);
}

setTimeout(greet, 2000, "Suraj"); // Hello Suraj after 2 sec
```

---

## 🧠 setTimeout vs setInterval

| Feature       | `setTimeout`               | `setInterval`                |
| ------------- | -------------------------- | ---------------------------- |
| Runs once?    | ✅ Yes                      | ❌ No                         |
| Delay usage   | Waits before one-time call | Waits between repeated calls |
| Cancel method | `clearTimeout()`           | `clearInterval()`            |

---

## 🛑 Common Mistake: Not Clearing Intervals

```javascript
// 🔥 BAD - Never stops
setInterval(() => {
  console.log("Infinite loop!");
}, 1000);
```

👉 Always store the ID and **clear** it when no longer needed.

---

## 🧠 Real-World Example: Countdown Timer

```javascript
let seconds = 10;

const timer = setInterval(() => {
  console.log(seconds);
  seconds--;

  if (seconds === 0) {
    clearInterval(timer);
    console.log("Time’s up!");
  }
}, 1000);
```

---

## 🧵 Nesting with setTimeout (recursive approach)

Alternative to `setInterval` for better control:

```javascript
function repeat() {
  console.log("Run every second");
  setTimeout(repeat, 1000);
}

repeat();
```

✅ Safer, because each timeout waits for the previous task to finish before scheduling the next.

---

## 🧪 setTimeout with 0ms Delay

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside timeout");
}, 0);

console.log("End");
```

### Output:

```
Start
End
Inside timeout
```

> Even with `0ms`, the function runs **after the call stack is clear** (asynchronously).

---

## 📦 setImmediate and process.nextTick (Node.js only)

* `setImmediate(fn)` → Executes after I/O events
* `process.nextTick(fn)` → Executes before any I/O events (higher priority)

---

## 🧠 Interview Tip: Event Loop

Timer methods depend on the **event loop**. Even `setTimeout(..., 0)` is **non-blocking** and gets added to the **task queue**.

---

## 🔐 Best Practices

* Always store timeout/interval IDs if you may want to cancel them
* Avoid deeply nested `setTimeout`s (use `async/await` instead)
* Don't use timers for precise timing (not real-time)
* Prefer `requestAnimationFrame()` for smooth animations in UI

---

## 🎯 Summary

| Timer Method      | Purpose                           |
| ----------------- | --------------------------------- |
| `setTimeout()`    | Run a function once after a delay |
| `clearTimeout()`  | Cancel a scheduled `setTimeout()` |
| `setInterval()`   | Repeatedly run a function         |
| `clearInterval()` | Stop a repeating interval         |

---

