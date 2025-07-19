# Call, Apply, and Bind

### **Why do these exist?**

In JavaScript, functions are *objects*, and you can control the value of `this` when calling them.
These methods (`call`, `apply`, `bind`) let you **explicitly set `this`** and pass arguments.

---

### **1. `call()`**

* Invokes a function immediately.
* You pass `this` as the first argument, and **subsequent arguments are passed one by one**.

```js
const person = {
  name: "Alice",
};

function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

greet.call(person, "Hello", "!");  
// Output: Hello, Alice!
```

Here:

* `this` becomes `person`.
* `"Hello"` and `"!"` are passed as arguments.

---

### **2. `apply()`**

* Almost the same as `call`, **but arguments are passed as an array**.

```js
const person = {
  name: "Bob",
};

function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

greet.apply(person, ["Hi", "!!"]);  
// Output: Hi, Bob!!
```

Useful when arguments are already in an array.

---

### **3. `bind()`**

* Doesn’t call the function immediately.
* **Returns a new function** with `this` permanently set (and optionally, preset arguments).

```js
const person = {
  name: "Charlie",
};

function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const greetCharlie = greet.bind(person, "Hey");
greetCharlie("?");  
// Output: Hey, Charlie?
```

Here:

* `bind` creates a new function `greetCharlie` where `this` is always `person`.
* `"Hey"` is pre-filled as the first argument.

---

### **Quick Difference Recap**

1. `call(thisArg, arg1, arg2, ...)` – Calls function immediately, args listed individually.
2. `apply(thisArg, [arg1, arg2, ...])` – Calls function immediately, args in an array.
3. `bind(thisArg, arg1, arg2, ...)` – Returns a new function (doesn’t execute immediately).

