"use strict";
class Car {
    constructor(brand, model, horsePower) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }
    get getBrand() {
        return this.brand;
    }
    set setModel(newModel) {
        if (newModel.length <= 4) {
            throw new Error("The model must be at least 5 characters");
        }
        this.model = newModel;
    }
}
const ford = new Car("ford", "mmustang", "200");
console.log(ford.getBrand);
console.log(ford.brand);
ford.setModel = "fiesta";
console.log(`The car is: ${ford.brand} ${ford.model} - ${ford.horsePower}`);
//# sourceMappingURL=carInfo.js.map