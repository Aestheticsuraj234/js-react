// *settimeout

// let timeoutID = setTimeout((username)=>{
//     console.log("Hello world " , username)
// } ,3000,"Suraj" )
// clearTimeout(timeoutID)

// setinterval
let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log("Hello");
  console.log(count);
  if (count === 3) {
    clearInterval(intervalId);
  }
}, 1000);
