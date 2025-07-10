# ✅ JavaScript Objects – Beginner to Intermediate Notes

---

## 🔸 1. What is an Object?

An **object** is a way to store related data together using **key-value pairs**.

```js
const person = {
  name: "Alice",
  age: 25,
  isStudent: true
};
```

* **Keys (properties)**: `"name"`, `"age"`, `"isStudent"`
* **Values**: `"Alice"`, `25`, `true`

---

## 🔸 2. How to Create an Object?

### ➤ A. Using Object Literal (most common way)

```js
const car = {
  brand: "Tesla",
  model: "Model S"
};
```

### ➤ B. Using `new Object()`

```js
const car = new Object();
car.brand = "Tesla";
car.model = "Model S";
```

### ➤ C. Using Constructor Function

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("John", 30);
```

---

## 🔸 3. Accessing Object Properties

### ➤ Dot Notation

```js
person.name; // "Alice"
```

### ➤ Bracket Notation

```js
person["age"]; // 25
```

Use bracket notation if:

* The key has spaces or special characters
* You want to use a **dynamic key**

```js
const key = "isStudent";
console.log(person[key]); // true
```

---

## 🔸 4. Adding, Updating & Deleting Properties

```js
// Add
person.city = "Delhi";

// Update
person.age = 26;

// Delete
delete person.isStudent;
```

---

## 🔸 5. Looping Through Object

### ➤ `for...in` loop

```js
for (let key in person) {
  console.log(key, person[key]);
}
```

---

## 🔸 6. Object Methods

Object methods are **functions stored inside objects**.

```js
const person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, I'm " + this.name);
  }
};

person.greet(); // Hello, I'm Alice
```

### ➤ Shorthand syntax (ES6)

```js
const person = {
  name: "Alice",
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};
```

---

## 🔸 7. Common Built-in Object Methods

### ✅ `Object.keys(obj)`

Returns an array of property names.

```js
Object.keys(person); // ["name", "greet"]
```

### ✅ `Object.values(obj)`

Returns an array of property values.

```js
Object.values(person); // ["Alice", function]
```

### ✅ `Object.entries(obj)`

Returns an array of `[key, value]` pairs.

```js
Object.entries(person);
// [["name", "Alice"], ["greet", function]]
```

### ✅ `Object.assign(target, source)`

Copies properties from one object to another.

```js
const newObj = Object.assign({}, person);
```

### ✅ Spread syntax (alternative to assign)

```js
const copy = { ...person };
```

---

## 🔸 8. Nested Objects

Objects can contain other objects.

```js
const student = {
  name: "Rahul",
  marks: {
    math: 90,
    english: 85
  }
};

console.log(student.marks.math); // 90
```

## 🔸 9. Checking Property Existence

### ➤ Using `in` keyword

```js
"name" in person; // true
```

### ➤ Using `hasOwnProperty`

```js
person.hasOwnProperty("age"); // true
```

---


## 🔸 15. Summary Table

| Operation       | Example                           |
| --------------- | --------------------------------- |
| Create          | `const obj = {}`                  |
| Access          | `obj.key` or `obj["key"]`         |
| Add/update      | `obj.newKey = value`              |
| Delete          | `delete obj.key`                  |
| Loop keys       | `for...in`, `Object.keys()`       |
| Clone           | `{ ...obj }` or `Object.assign()` |
| Check key       | `"key" in obj`                    |
| Convert to JSON | `JSON.stringify(obj)`             |

---



### ✅ 1. `Object.keys(obj)`

Returns an **array of all property names (keys)** of the object.

```js
const user = { name: "Alice", age: 25 };
console.log(Object.keys(user)); 
// Output: ["name", "age"]
```

---

### ✅ 2. `Object.values(obj)`

Returns an **array of all property values**.

```js
const user = { name: "Alice", age: 25 };
console.log(Object.values(user)); 
// Output: ["Alice", 25]
```

---

### ✅ 3. `Object.entries(obj)`

Returns an **array of key-value pairs** as arrays.

```js
const user = { name: "Alice", age: 25 };
console.log(Object.entries(user)); 
// Output: [["name", "Alice"], ["age", 25]]
```

---

### ✅ 4. `Object.assign(target, source)`

Copies all properties from the source object(s) to the target object.

```js
const a = { x: 1 };
const b = { y: 2 };
const result = Object.assign({}, a, b);
console.log(result); 
// Output: { x: 1, y: 2 }
```

---

### ✅ 5. `Object.freeze(obj)`

**Freezes** the object: prevents adding, deleting, or modifying any properties.

```js
const settings = { darkMode: true };
Object.freeze(settings);
settings.darkMode = false;
console.log(settings.darkMode); 
// Output: true (unchanged)
```

