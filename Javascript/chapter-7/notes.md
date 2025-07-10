## 🔤 What is a String in JavaScript?

A **string** is a sequence of characters used to represent text.
You can create strings using:

```js
let str1 = "Hello";
let str2 = 'World';
let str3 = `Hi ${str1}`; // Template literal
```

* Strings are **immutable** — once created, they cannot be changed. Any method returns a new string.
* JavaScript strings are **UTF-16 encoded**, so emojis and some special characters might take more than one character space.

---

## 🔧 10 Most Used String Methods (with details)

---

### 1. **`length`** → ✅ *Property* (not a method)

Returns the number of UTF-16 code units in the string.

```js
let name = "CodeSnippet";
console.log(name.length); // 11
```

> 🧠 **Note:** Emojis or characters like `𝌆` might count as 2 or more characters because of UTF-16 encoding.

---

### 2. **`charAt(index)`**

Returns the character at the specified index.

```js
let word = "JavaScript";
console.log(word.charAt(4)); // S
```

> ❗ If the index is out of bounds, it returns an empty string.

---

### 3. **`slice(start, end)`**

Extracts a section of a string and returns it as a new string.

```js
let str = "JavaScript";
console.log(str.slice(0, 4));   // "Java"
console.log(str.slice(-6));    // "Script"
```

> 🔹 Negative values count from the end.
> 🔹 `end` is exclusive.

---

### 4. **`substring(start, end)`**

Similar to `slice`, but:

* Doesn’t accept negative indices.
* Swaps `start` and `end` if `start > end`.

```js
let str = "JavaScript";
console.log(str.substring(4, 0)); // "Java"
```

> ⚠️ Avoid this in modern code. Prefer `slice()`.

---

### 5. **`substr(start, length)`** ❌ *Deprecated*

Extracts a part of the string, starting at `start`, for `length` characters.

```js
let str = "JavaScript";
console.log(str.substr(4, 6)); // "Script"
```

> 🛑 Deprecated in modern JavaScript. Use `slice()` instead.

---

### 6. **`toUpperCase()` / `toLowerCase()`**

Returns the string in all upper/lower case.

```js
let name = "Code";
console.log(name.toUpperCase()); // "CODE"
console.log(name.toLowerCase()); // "code"
```

> 🔐 Original string remains unchanged.

---

### 7. **`trim()`**

Removes whitespace from both ends.

```js
let messy = "  Hello World  ";
console.log(messy.trim()); // "Hello World"
```

> 🧹 Use `trimStart()` and `trimEnd()` for more control.

---

### 8. **`includes(substring, fromIndex?)`**

Returns `true` if substring exists in the string.

```js
let title = "Learn JavaScript";
console.log(title.includes("Java"));    // true
console.log(title.includes("java"));    // false
```

> 🔍 Case-sensitive
> 🧠 Optional `fromIndex` lets you start checking from a specific index.

---

### 9. **`indexOf(substring)` / `lastIndexOf()`**

Returns the index of the **first/last** occurrence of the substring.

```js
let txt = "banana";
console.log(txt.indexOf("a"));      // 1
console.log(txt.lastIndexOf("a"));  // 5
```

> ❗ Returns `-1` if not found.

---

### 10. **`replace(searchValue, replaceValue)`**

Returns a new string with the first match replaced.

```js
let msg = "I love JavaScript";
console.log(msg.replace("love", "like")); // "I like JavaScript"
```

> 🧠 To replace **all** occurrences, use RegExp with `/g` flag:

```js
msg.replace(/a/g, "@");
```

---

### BONUS: `split()`, `repeat()`, `startsWith()`, `endsWith()`, `match()`, `padStart()`, `padEnd()`

These are also very powerful — let me know if you want a second list of string methods.

---

## 🔍 Summary Table

| Method          | Use Case                         | Mutates? | Notes                         |
| --------------- | -------------------------------- | -------- | ----------------------------- |
| `length`        | Get number of characters         | ❌        | Property, not a method        |
| `charAt()`      | Get character at position        | ❌        | Returns empty if out of range |
| `slice()`       | Extract substring (supports `-`) | ❌        | Modern & preferred            |
| `substring()`   | Extract substring                | ❌        | No negative index             |
| `toUpperCase()` | Convert to uppercase             | ❌        | Case sensitive                |
| `trim()`        | Remove whitespace                | ❌        | `trimStart()` and `trimEnd()` |
| `includes()`    | Check if substring exists        | ❌        | Case-sensitive                |
| `indexOf()`     | First occurrence of substring    | ❌        | Returns -1 if not found       |
| `replace()`     | Replace part of string           | ❌        | Only replaces **first** match |
| `toLowerCase()` | Convert to lowercase             | ❌        |                               |


