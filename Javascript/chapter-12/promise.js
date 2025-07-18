// step-1. let myPromise = new Promise(()=>{

// })

// * creating promise phase

// let myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve({ username: "suraj" });
//   } else {
//     reject({ error: "Something went wrong" });
//   }
// });

// myPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Always runs");
//   });

// // resolve ---> .then()
// // reject ----> .catch()

// const multiplyByTwo = new Promise((resolve) => {
//   setTimeout(() => resolve(5), 1000);
// });

// multiplyByTwo
//   .then((num) => {
//     console.log("Step 1:", num); // 5
//     return num * 2;
//   })
//   .then((num) => {
//     console.log("Step 2:", num); // 10
//     return num * 2;
//   })
//   .then((num) => {
//     console.log("Step 3:", num); // 20
//     return num * 2;
//   })
//   .then((num) => {
//     console.log("Step-4:", num);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });

fetch("https://api.github.com/users/aestheticsuraj234")
.then((res)=>{
    return res.json()
}).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("always runs")
})