// function greet(username , callback){
//     console.log("Hello " + username);
//     callback()
// }

// greet('Suraj' , sayGoodBye)


// function sayGoodBye(){
//     console.log("GoodBye!")
// }

console.log("Start")

setTimeout(()=>{
    console.log("Our async code")
} , 2000)

console.log("End")
