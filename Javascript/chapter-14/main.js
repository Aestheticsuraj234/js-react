//* the value of this keyword is decided by how you are using it and where you are using it
"use strict";

// console.log(this);
//
// this-keyword in function

// function greet() {
//     console.log(this);
// }
// greet();

// this keyword substitution

// this keyword in objects

// let person = {
//     name:"Suraj",
//     age:21,
//     greet:function(){
//         console.log(this.name)
//     }
// }

// // person.greet()

// let person2 = {
//     name:"Jhonny"
// }

// person.greet.call(person2)

// const greet = ()=>{
//     console.log(this);
// }

// greet()

// let person = {
//   name: "Suraj",
//   age: 21,
//   greet: function () {
//     const innerFunction = () => {
//       console.log(this);
//     };
//     innerFunction();
//   },
// };

// person.greet();



const person = {
  name: "Alice",
};

const person2={
    name:"Suraj"
}
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const greetSuraj = greet.bind(person , "Hello" , "!");

greetSuraj();

// greet.apply(person, ["Hello", "!"]);

// greet.call(person2, "Hello", "!");