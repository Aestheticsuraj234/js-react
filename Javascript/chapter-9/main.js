// const btn = document.getElementById("myButton");

// // btn.onclick = function(){
// //   alert("Button clicked!");
// // }


// btn.addEventListener("click" , function(event){
//   console.log(event);
//   console.log("Button clicked!");
// })
const body = document.body;
const parent = document.getElementById("parent");
const child = document.getElementById("child");


body.addEventListener("click" , function(){
  console.log("body clicked!");
})

parent.addEventListener("click" , function(){
  console.log("parent clicked!");
})

child.addEventListener("click" , function(e){
  e.stopPropagation();
  console.log("Child clicked!");
})

document.addEventListener("keydown", (e) => {
  console.log(e.key); // Logs the key pressed (like "a", "Enter")
});

document.addEventListener("mousemove", (e) => {
  console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
});