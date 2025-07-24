// class MathUtils{
//     constructor(){
//         console.log("Object created")
//     }
//     static PI = 3.14;

//      static add(a,b){
//         return a+b
//     }
// }

// const mathutils = new MathUtils();

// console.log(mathutils.add(1,2))

class BankAccount{
    #balance; // private Property

    constructor(inititalBalance){
        this.#balance = inititalBalance
    }

    deposit(amount){
        this.#balance += amount
    }

    getBalance(){
        return this.#balance
    }
}

const myAccount = new BankAccount(100000);

myAccount.deposit(50000);

console.log(myAccount.balance)