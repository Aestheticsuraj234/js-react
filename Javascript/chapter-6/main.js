// const Person = {
//   name:"Alice",
//   age:25,
//   isStudent:true
// }

// console.log(Person)

// const car = new Object();
// car.make = "Honda";
// car.model = "Civic";
// car.year = 2019;

// console.log(car);

const Person = {
  name:"Alice",
  age:25,
  greet: function() {
    console.log("Hello, I'm " + this.name);
  },
  isStudent:true
}

// Person.greet();

// console.log(Person["name"])

// Person.city = "Delhi";

// Person.age = 21;

// delete Person.isStudent;

// console.log(Person)

// for(let key in Person){
//   console.log(eky, Person[key])
// }

console.log(Object.values(Person));

console.log(Object.entries(Person));

console.log(Object.keys(Person));



const settings = { darkMode: true };
Object.freeze(settings);
settings.darkMode = false;
console.log(settings.darkMode); 