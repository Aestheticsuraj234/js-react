class Animals{
    constructor(name){
        this.name = name
    }

    eat(){
   console.log(`${this.name} is eating`);
    }

    sleep(){
   console.log(`${this.name} is sleeping`);
    }

    walk(){
   console.log(`${this.name} is walking`);
    }

    run(){
   console.log(`${this.name} is running`);
    }
}

const HorseNew = new Animals("Horse")

class Horse extends Animals{
    constructor(name , sound){
        super(name)
        this.sound = sound
    }

    makeSound(){
           console.log(`${this.name} makes sound ${this.sound}`);
    }
}

const Horse1 = new Horse("IDN" , "Neigh!");

// Horse1.makeSound()

// console.log(HorseNew instanceof Animals)

console.log(Horse1 instanceof Horse)