class Person{
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }
}

const person = new Person("Suraj");
console.log(person.name); // John