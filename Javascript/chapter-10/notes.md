## 📦 JSON (JavaScript Object Notation)

### 🔹 What is JSON?

* A **lightweight data-interchange format**.
* Easy for humans to read/write, and easy for machines to parse.
* Based on JavaScript **object syntax**, but used in many languages.

### 🔹 JSON Syntax Rules

* Data is in **name/value** pairs:
  `"name": "John"`
* Data is **comma-separated**.
* Curly braces `{}` hold **objects**.
* Square brackets `[]` hold **arrays**.
* Strings must be in **double quotes** (`"`).

### 🔹 JSON vs JavaScript Object

| Feature    | JSON                         | JavaScript Object           |
| ---------- | ---------------------------- | --------------------------- |
| Quotes     | Keys and strings in `""`     | Keys can be unquoted        |
| Data types | No functions, no `undefined` | Can have functions, symbols |
| Parsing    | Needs `JSON.parse()`         | Native to JS                |

### 🔹 Methods

#### `JSON.stringify()`

Converts **JavaScript object → JSON string**.

```js
const obj = { name: "Alice", age: 25 };
const jsonStr = JSON.stringify(obj);
console.log(jsonStr); // '{"name":"Alice","age":25}'
```

> Note: Removes methods, `undefined`, `Symbol`.

#### `JSON.parse()`

Converts **JSON string → JavaScript object**.

```js
const json = '{"name":"Alice","age":25}';
const obj = JSON.parse(json);
console.log(obj.name); // Alice
```

---

## 🗂 localStorage

### 🔹 What is localStorage?

* Stores **key-value** pairs in **browser**.
* Stored data persists **even after the browser is closed**.
* Stored in **origin-based** (i.e., specific to domain + protocol).

### 🔹 Characteristics

| Feature         | Value                      |
| --------------- | -------------------------- |
| Storage size    | \~5MB                      |
| Data lifetime   | **Until manually cleared** |
| Accessible from | JS on the same origin      |

### 🔹 API Methods

```js
// Save data
localStorage.setItem("username", "john");

// Retrieve data
const user = localStorage.getItem("username");

// Remove specific item
localStorage.removeItem("username");

// Clear all
localStorage.clear();
```

> 🧠 Data is **always stored as strings**. Use `JSON.stringify()` to store objects.

```js
const user = { name: "Alice", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Later...
const data = JSON.parse(localStorage.getItem("user"));
console.log(data.name); // Alice
```

---

## 🕒 sessionStorage

### 🔹 What is sessionStorage?

* Also stores key-value pairs.
* But **cleared when the tab or browser is closed**.
* **Tab-specific** (not shared across tabs/windows).

### 🔹 Characteristics

| Feature             | Value                   |
| ------------------- | ----------------------- |
| Storage size        | \~5MB                   |
| Data lifetime       | **Until tab is closed** |
| Shared between tabs | ❌ No                    |

### 🔹 API (Same as localStorage)

```js
sessionStorage.setItem("token", "abc123");
const token = sessionStorage.getItem("token");
sessionStorage.removeItem("token");
sessionStorage.clear();
```

---

## 📊 localStorage vs sessionStorage vs Cookies

| Feature          | localStorage            | sessionStorage  | Cookies                  |
| ---------------- | ----------------------- | --------------- | ------------------------ |
| Storage Size     | \~5MB                   | \~5MB           | \~4KB                    |
| Expires          | Never (unless cleared)  | On tab close    | Based on `expires`       |
| Sent to server   | ❌ No                    | ❌ No            | ✅ Yes (on every request) |
| Accessible in JS | ✅ Yes                   | ✅ Yes           | ✅ Yes                    |
| Use Cases        | Persistent login, theme | Temp auth, OTPs | Auth, session ID         |

---

## 🔐 Common Use Cases

### ✅ Save User Theme

```js
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}
function loadTheme() {
  const theme = localStorage.getItem("theme");
  document.body.className = theme || "light";
}
```

### ✅ Remember Form Data Temporarily

```js
// On input change
sessionStorage.setItem("email", emailInput.value);

// On reload
emailInput.value = sessionStorage.getItem("email") || "";
```

---

## ⚠️ Best Practices

* Always use `try-catch` when parsing JSON.
* Store complex data using `JSON.stringify()`.
* Never store sensitive data like passwords or tokens in localStorage/sessionStorage.
* Use expiry logic manually if needed:

```js
const data = {
  value: "something",
  expiry: new Date().getTime() + 1000 * 60 * 60, // 1 hour
};
localStorage.setItem("data", JSON.stringify(data));

// Later
const stored = JSON.parse(localStorage.getItem("data"));
if (new Date().getTime() > stored.expiry) {
  localStorage.removeItem("data");
}
```

---

## 🧪 Bonus: Auto-Expire Logic for localStorage

```js
function setWithExpiry(key, value, ttl) {
  const now = Date.now();
  const item = {
    value,
    expiry: now + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  if (Date.now() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}
```

