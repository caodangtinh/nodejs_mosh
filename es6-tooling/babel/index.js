const x = 1;
let y = 10;
let sum = (a, b) => {
    return a + b;
};

class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    sayHello() {
        console.log('Hello' + this.name);
    }
}