console.log("Start of script");


setTimeout(() => {
    console.log("This is from the task queue settimeout");
}, 0);


Promise.resolve().then(() => {
    console.log("This is from the microtask queue promise");
});

console.log("End of script");