## 🔁 1. `useRef` Hook

### ✅ What is `useRef`?

* `useRef` gives you a **mutable object** that **persists across renders**.
* It doesn't trigger a re-render when the value changes.
* It’s mostly used to:

  * Access **DOM elements** directly.
  * Store **previous values**.
  * Hold **mutable values** that don't need re-rendering.

---

### 📦 Syntax:

```jsx
const myRef = useRef(initialValue);
```

---

### 🧪 Example 1: Accessing DOM element (like `document.querySelector`)

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus(); // direct access to DOM
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
```

---

### 🧪 Example 2: Storing previous value

```jsx
import { useState, useEffect, useRef } from "react";

function PreviousValueTracker() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count; // store current count
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

---

## 🧠 2. `useMemo` Hook

### ✅ What is `useMemo`?

* `useMemo` **caches a computed value**.
* It only recomputes when dependencies change.
* It’s used to **optimize expensive calculations**.

---

### 📦 Syntax:

```jsx
const memoizedValue = useMemo(() => computeFunction(), [dependencies]);
```

---

### 🧪 Example: Avoid recalculating expensive logic

```jsx
import { useState, useMemo } from "react";

function SlowCalculation({ num }) {
  // Fake slow function
  const expensiveCalculation = (n) => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
      result += n;
    }
    return result;
  };

  const calculated = useMemo(() => expensiveCalculation(num), [num]);

  return <p>Result: {calculated}</p>;
}

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <SlowCalculation num={number} />
    </div>
  );
}
```

🔍 Without `useMemo`, `expensiveCalculation()` would run **every time theme changes** — even if `num` didn’t. `useMemo` avoids that.

---

## 🪝 3. `useCallback` Hook

### ✅ What is `useCallback`?

* `useCallback` returns a **memoized version of a function**.
* It only recreates the function when dependencies change.
* Useful when:

  * You pass callbacks to **child components**.
  * You want to **avoid unnecessary re-renders**.

---

### 📦 Syntax:

```jsx
const memoizedFunction = useCallback(() => { /* logic */ }, [dependencies]);
```

---

### 🧪 Example: Preventing unnecessary re-renders of child component

```jsx
import { useState, useCallback } from "react";

function Button({ handleClick }) {
  console.log("Button re-rendered");
  return <button onClick={handleClick}>Click Me</button>;
}

const MemoButton = React.memo(Button);

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // recreated only if [] changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <MemoButton handleClick={handleClick} />
    </div>
  );
}
```

🔍 If you **don’t use `useCallback`**, then on every parent render, a **new function is passed**, and child re-renders unnecessarily.

---

## 🧠 Summary Table

| Hook          | Purpose                          | Triggers Re-render? | Common Use Case                     |
| ------------- | -------------------------------- | ------------------- | ----------------------------------- |
| `useRef`      | Store mutable values or DOM refs | ❌ No                | DOM access, previous value tracking |
| `useMemo`     | Cache a computed value           | ❌ No                | Expensive calculations              |
| `useCallback` | Cache a function                 | ❌ No                | Prevent child re-renders            |

---

### ✅ Bonus: When NOT to use them

* Don’t overuse `useMemo` or `useCallback` — they are performance tools, not always necessary.
* `useRef` is **not for state updates** (won’t cause re-render).

