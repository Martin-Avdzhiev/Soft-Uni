"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.drinks = [];
        this.buttonCapacity = buttonCapacity;
    }
    addDrink(drink) {
        if (this.buttonCapacity > this.drinks.length) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const drinkIndex = this.drinks.findIndex((x) => x.name == name);
        if (drinkIndex != -1) {
            this.drinks.splice(drinkIndex, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        let longestVolume = 0;
        this.drinks.forEach((x) => {
            if (x.volume > longestVolume) {
                longestVolume = x.volume;
            }
        });
        let longestDrink = this.drinks.find((x) => x.volume == longestVolume);
        return longestDrink === null || longestDrink === void 0 ? void 0 : longestDrink.toString();
    }
    getCheapest() {
        let cheapestPrice = Number.MAX_SAFE_INTEGER;
        this.drinks.forEach((x) => {
            if (x.price < cheapestPrice) {
                cheapestPrice = x.price;
            }
        });
        let cheapestDrink = this.drinks.find((x) => x.price == cheapestPrice);
        return cheapestDrink === null || cheapestDrink === void 0 ? void 0 : cheapestDrink.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.filter((x) => x.name == name);
        return drink.toString();
    }
    getCount() {
        return this.drinks.length;
    }
    report() {
        let result = "Drinks available:\n";
        this.drinks.forEach((x) => {
            result += x.toString() + "\n";
        });
        return result;
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map