const p1 = {
    name:"Suraj",
    age:21,
    greet:function(){
        console.log(`Hello ${this.name}`)
    }
}

// console.log(p1.name)

// p1.greet()

const p2 = Object.create(p1);

console.log(p2.name)

// const p2 ={
//     name:"Jhon",
//     age:21,
//     greet:function(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// let obj = {}

// console.log(obj.__proto__)

// let animal = {
//     type: "Animal",
// };


// let animal2 = {
//     name:"horse",
//     sound:"heeeignnn",
//     __proto__:animal
// }

// let animal3 = {
//     name:"Lion",
//     __proto__:animal2
// }


// console.log(animal3)

// let username = new String("Suraj");

// console.log(username.__proto__)

let number = 0;
console.log(number.__proto__)