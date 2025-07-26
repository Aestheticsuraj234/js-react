## 📌 1. Event Handling in React

### ✅ React Events vs DOM Events

* React wraps native DOM events inside its **synthetic event system** (`SyntheticEvent`) for **cross-browser compatibility**.
* Event names in React are **camelCase**: `onClick`, `onChange` instead of `onclick`, `onchange`.

---

### 🔹 Basic Event Handling Example

```jsx
import React from "react";

function ClickButton() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default ClickButton;
```

---

### 🔹 Passing Arguments to Event Handlers

```jsx
function GreetingButton({ name }) {
  const greet = (person) => {
    alert(`Hello, ${person}`);
  };

  return (
    <button onClick={() => greet(name)}>Say Hello</button>
  );
}
```

---

### 🔹 Common Events in React

| Event Type   | React Handler          |
| ------------ | ---------------------- |
| Click        | `onClick`              |
| Form Submit  | `onSubmit`             |
| Input Change | `onChange`             |
| Focus/Blur   | `onFocus`, `onBlur`    |
| Key Press    | `onKeyDown`, `onKeyUp` |

---

### 🔹 Prevent Default Behavior

```jsx
function MyForm() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 🧾 2. Forms in React

In HTML, form inputs maintain their own state. In React, **you control them via state**.

---

### ✅ Controlled Components

The form input's value is controlled by React's `useState`.

```jsx
import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Greet</button>
    </form>
  );
}
```

---

### 🔹 Handling Multiple Inputs

```jsx
function MultiInputForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

### 🔹 Handling Checkbox

```jsx
function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Subscribe
      </label>
      <p>{isChecked ? "Subscribed ✅" : "Not Subscribed ❌"}</p>
    </div>
  );
}
```

---

### 🔹 Handling Select Dropdown

```jsx
function SelectExample() {
  const [country, setCountry] = useState("India");

  return (
    <div>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Germany">Germany</option>
      </select>
      <p>You selected: {country}</p>
    </div>
  );
}
```

---

## 🧠 Bonus Tips

* Always use `value` and `onChange` together for **controlled inputs**.
* Use `name` attributes and computed property names for multiple inputs.
* Avoid using **uncontrolled components** unless needed.
* Wrap forms with `onSubmit`, not buttons.

---

## 🚀 Practice Project Ideas

1. **Login Form** with email and password.
2. **To-do App** using input and buttons.
3. **Contact Form** with validation.
4. **Survey Form** with radio, checkbox, and dropdown.

