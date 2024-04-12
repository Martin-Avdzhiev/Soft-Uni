"use strict";
class CarDealership {
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
        this.modelsSold = {};
    }
    sellCar(dealerId, model) {
        this.modelsSold[String(dealerId)] = model;
        this.soldCars++;
    }
    showDetails() {
        let message = this.dealershipName + "\n";
        for (const key in this.modelsSold) {
            message += `${key} sold ${this.modelsSold[key]}\n`;
        }
        return message;
    }
}
let dealership = new CarDealership('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
//# sourceMappingURL=carDealership.js.map