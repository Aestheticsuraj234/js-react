# Prototypes & Prototypal Inheritance in JavaScript

## What is a Prototype?

A **prototype** is an object from which other objects inherit properties and methods. Every JavaScript object has a prototype, and this forms the basis of JavaScript's inheritance system.

Think of a prototype as a "blueprint" or "template" that objects can use to get additional properties and methods.

## Key Concepts

### 1. The `__proto__` Property
Every object in JavaScript has a hidden property called `__proto__` that points to its prototype.

```javascript
let obj = {};
console.log(obj.__proto__); // Points to Object.prototype
```

### 2. The `prototype` Property
Functions in JavaScript have a `prototype` property that becomes the prototype of objects created using that function as a constructor.

```javascript
function Person() {}
console.log(Person.prototype); // An object that will be the prototype for Person instances
```

## Simple Examples

### Example 1: Basic Prototype Chain

```javascript
// Create a simple object
let animal = {
    type: "Animal",
    makeSound: function() {
        return "Some generic sound";
    }
};

// Create another object that inherits from animal
let dog = Object.create(animal);
dog.breed = "Golden Retriever";

console.log(dog.type);        // "Animal" (inherited from animal)
console.log(dog.breed);       // "Golden Retriever" (own property)
console.log(dog.makeSound()); // "Some generic sound" (inherited method)
```

**Explanation**: `dog` inherits from `animal`. When we access `dog.type`, JavaScript looks for `type` in `dog`, doesn't find it, then looks in `dog`'s prototype (`animal`) and finds it there.

### Example 2: Constructor Functions and Prototypes

```javascript
// Constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add methods to the prototype
Car.prototype.start = function() {
    return this.make + " " + this.model + " is starting!";
};

Car.prototype.stop = function() {
    return this.make + " " + this.model + " has stopped.";
};

// Create instances
let car1 = new Car("Toyota", "Camry");
let car2 = new Car("Honda", "Civic");

console.log(car1.start()); // "Toyota Camry is starting!"
console.log(car2.start()); // "Honda Civic is starting!"

// Both cars share the same methods from the prototype
console.log(car1.start === car2.start); // true (same function reference)
```

**Explanation**: Both `car1` and `car2` inherit the `start` and `stop` methods from `Car.prototype`. This saves memory because the methods are shared rather than copied to each instance.

### Example 3: Prototype Chain in Action

```javascript
// Base object
let vehicle = {
    wheels: 4,
    move: function() {
        return "Moving forward";
    }
};

// Intermediate object
let car = Object.create(vehicle);
car.engine = "V6";
car.honk = function() {
    return "Beep beep!";
};

// Final object
let myCar = Object.create(car);
myCar.color = "red";
myCar.brand = "Toyota";

// Accessing properties up the prototype chain
console.log(myCar.color);   // "red" (own property)
console.log(myCar.engine);  // "V6" (from car prototype)
console.log(myCar.wheels);  // 4 (from vehicle prototype)
console.log(myCar.move());  // "Moving forward" (from vehicle prototype)
```

**Explanation**: `myCar` → `car` → `vehicle` → `Object.prototype` → `null`. JavaScript searches up this chain to find properties.

### Example 4: Adding to Built-in Prototypes

```javascript
// Adding a method to Array prototype (be careful with this!)
Array.prototype.getFirst = function() {
    return this[0];
};

Array.prototype.getLast = function() {
    return this[this.length - 1];
};

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.getFirst()); // 1
console.log(numbers.getLast());  // 5

let fruits = ["apple", "banana", "orange"];
console.log(fruits.getFirst()); // "apple"
console.log(fruits.getLast());  // "orange"
```

**Explanation**: All arrays now have access to `getFirst` and `getLast` methods because they inherit from `Array.prototype`.

## How Prototypal Inheritance Works

### The Lookup Process
When you access a property on an object:

1. **Check the object itself** - Does the object have this property?
2. **Check the prototype** - If not found, look in the object's prototype
3. **Continue up the chain** - Keep looking up the prototype chain
4. **Return undefined** - If not found anywhere, return undefined

```javascript
let obj = { name: "John" };

// Step-by-step lookup for obj.name:
// 1. Check obj itself → Found "John" ✓
console.log(obj.name); // "John"

// Step-by-step lookup for obj.toString:
// 1. Check obj itself → Not found
// 2. Check obj.__proto__ (Object.prototype) → Found toString method ✓
console.log(obj.toString()); // "[object Object]"
```

## Practical Examples

### Example 1: Creating a Simple Inheritance Hierarchy

```javascript
// Parent constructor
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return this.name + " makes a sound";
};

// Child constructor
function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add child-specific methods
Dog.prototype.bark = function() {
    return this.name + " barks: Woof!";
};

// Override parent method
Dog.prototype.speak = function() {
    return this.name + " barks";
};

// Create instances
let genericAnimal = new Animal("Generic");
let myDog = new Dog("Buddy", "Golden Retriever");

console.log(genericAnimal.speak()); // "Generic makes a sound"
console.log(myDog.speak());        // "Buddy barks"
console.log(myDog.bark());         // "Buddy barks: Woof!"
```

### Example 2: Using Object.create() for Clean Inheritance

```javascript
// Base object
let shape = {
    color: "black",
    draw: function() {
        return "Drawing a " + this.color + " shape";
    }
};

// Create circle that inherits from shape
let circle = Object.create(shape);
circle.radius = 5;
circle.area = function() {
    return Math.PI * this.radius * this.radius;
};

// Create specific circle instance
let myCircle = Object.create(circle);
myCircle.color = "red";
myCircle.radius = 10;

console.log(myCircle.draw());  // "Drawing a red shape"
console.log(myCircle.area());  // 314.159...
```

## Common Methods and Properties

### Checking Prototypes

```javascript
let obj = {};

// Check if an object is in another object's prototype chain
console.log(Object.prototype.isPrototypeOf(obj)); // true

// Get the prototype of an object
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// Check if object has its own property (not inherited)
obj.name = "John";
console.log(obj.hasOwnProperty('name'));     // true
console.log(obj.hasOwnProperty('toString')); // false (inherited)
```

### Setting Prototypes

```javascript
let parent = { x: 1 };
let child = { y: 2 };

// Set prototype after object creation
Object.setPrototypeOf(child, parent);

console.log(child.x); // 1 (inherited from parent)
console.log(child.y); // 2 (own property)
```

## Important Points to Remember

### 1. Prototype vs __proto__
```javascript
function Person() {}
let person = new Person();

// Person.prototype is the object that becomes the prototype for instances
// person.__proto__ points to Person.prototype
console.log(person.__proto__ === Person.prototype); // true
```

### 2. All Objects Have Prototypes (Except null)
```javascript
let obj = {};
console.log(obj.__proto__);                    // Object.prototype
console.log(obj.__proto__.__proto__);          // null (end of chain)

function func() {}
console.log(func.__proto__);                   // Function.prototype
console.log(func.__proto__.__proto__);         // Object.prototype
```

### 3. Methods vs Properties
```javascript
function Person(name) {
    this.name = name;           // Property (unique to each instance)
}

Person.prototype.greet = function() {  // Method (shared among instances)
    return "Hello, I'm " + this.name;
};

let person1 = new Person("Alice");
let person2 = new Person("Bob");

// Each person has their own name
console.log(person1.name !== person2.name); // true

// But they share the same greet method
console.log(person1.greet === person2.greet); // true
```

## Modern JavaScript (ES6+) Classes

While classes in JavaScript are syntactic sugar over prototypes, here's how they relate:

```javascript
// ES6 Class syntax
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return this.name + " makes a sound";
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    bark() {
        return this.name + " barks!";
    }
}

// Under the hood, this still uses prototypes
let dog = new Dog("Max", "Labrador");
console.log(dog instanceof Animal); // true
console.log(Dog.prototype.__proto__ === Animal.prototype); // true
```

## Summary

Prototypal inheritance is JavaScript's way of sharing properties and methods between objects. Key takeaways:

- Every object has a prototype (except the root Object.prototype)
- Objects inherit properties and methods from their prototype chain
- Constructor functions use their `prototype` property to set up inheritance
- The prototype chain enables powerful and flexible inheritance patterns
- Modern classes are built on top of this prototype system

