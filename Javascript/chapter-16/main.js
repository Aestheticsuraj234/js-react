console.log(`var x = ${x}`)


let x = 10;


globalExecution()
 function globalExecution(){
    let x = 10;
    console.log(x);
    console.log("Hello i am inside global execution")
}

console.log("End of script")