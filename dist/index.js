"use strict";
class Car {
    // creating a private constructor
    constructor(name) {
        this.name = "";
    }
    // getter method
    static constructor1() {
        return this.constructor();
    }
}
let car1 = Car.constructor1();
console.log(car1);
