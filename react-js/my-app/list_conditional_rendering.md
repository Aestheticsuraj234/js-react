
## 🔁 LISTS IN REACT

### ✅ What is List Rendering?

In React, we often want to display multiple similar components — like a list of items. We use JavaScript’s array methods (like `.map()`) to render these items as JSX.

---

### 🧠 Basic Example: Rendering a List of Names

```jsx
export default function NameList() {
  const names = ["Suraj", "Priya", "Aman"];

  return (
    <div>
      <h2>Name List</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li> // key is important!
        ))}
      </ul>
    </div>
  );
}
```

---

### 💡 Why is `key` important?

* React uses `key` to identify which items have changed, added, or removed.
* It improves performance during re-renders.
* **Avoid using `index` as key in dynamic lists.**

---

### 🧰 Example: Rendering a List of Objects

```jsx
const users = [
  { id: 1, name: "Suraj", age: 25 },
  { id: 2, name: "Aman", age: 23 },
  { id: 3, name: "Priya", age: 24 },
];

export default function UserList() {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## ⚡ CONDITIONAL RENDERING IN REACT

### ✅ What is Conditional Rendering?

Just like JS `if-else`, React lets us render elements **based on certain conditions**.

---

### 1. **Using `if` or `else if` inside a component**

```jsx
function Welcome({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  } else {
    return <h1>Please Log In</h1>;
  }
}
```

---

### 2. **Using Ternary Operator**

```jsx
function Greeting({ isMorning }) {
  return (
    <h2>
      {isMorning ? "Good Morning 🌞" : "Good Evening 🌙"}
    </h2>
  );
}
```

---

### 3. **Using Logical AND (`&&`)**

```jsx
function Notification({ unreadCount }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {unreadCount > 0 && <p>You have {unreadCount} unread messages.</p>}
    </div>
  );
}
```

---

### 4. **Conditional Rendering with State**

```jsx
import { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      {isVisible && <p>This message is visible</p>}
    </div>
  );
}
```

---

### 5. **Nested Conditional Rendering (Avoid if messy)**

```jsx
function Status({ isLoggedIn, hasPremium }) {
  return (
    <div>
      {isLoggedIn ? (
        hasPremium ? (
          <p>Welcome Premium User</p>
        ) : (
          <p>Upgrade to Premium</p>
        )
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
```

---

## 🔀 Combining Lists and Conditionals

### Example: Show only active users

```jsx
const users = [
  { id: 1, name: "Suraj", active: true },
  { id: 2, name: "Aman", active: false },
  { id: 3, name: "Priya", active: true },
];

function ActiveUserList() {
  return (
    <ul>
      {users
        .filter((user) => user.active)
        .map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
    </ul>
  );
}
```

---

## 🧪 Mini Practice Challenge

**Build a simple todo list where completed todos are shown with ✅**

```jsx
const todos = [
  { id: 1, task: "Learn React", done: true },
  { id: 2, task: "Go to Gym", done: false },
  { id: 3, task: "Write Notes", done: true },
];

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.done ? "✅" : "⬜"} {todo.task}
        </li>
      ))}
    </ul>
  );
}
```

---

## 🔚 Summary

| Concept                  | Use                          |
| ------------------------ | ---------------------------- |
| `.map()`                 | Render list of elements      |
| `key`                    | Required to track list items |
| `if`, ternary, `&&`      | Conditional rendering        |
| Combine `filter` + `map` | Show filtered lists          |

