// const button = document.getElementById("btn");

// // button.onclick = function () {
// //   console.log("Hello world");
// // };

// button.addEventListener("click" ,(event)=>{

//     console.log(event)
//     console.log("Button Clicked")
// } )

const parent = document.getElementById("parent");
const child = document.getElementById("child");
const body = document.getElementsByTagName("body")[0]

body.addEventListener("click", (e) => {
  
  console.log("body clicked");
});

parent.addEventListener("click", (e) => {
   e.stopPropagation()
  console.log("Parent clicked");
} );

child.addEventListener("click", (e) => {
     
  console.log("Child clicked");
} );

document.addEventListener("keydown", (e) => {
  console.log(e.key); // Logs the key pressed (like "a", "Enter")
});

document.addEventListener("mousemove", (e) => {
  console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
});