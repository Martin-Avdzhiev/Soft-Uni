"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(vin, mileage, damage) {
        this.vin = vin;
        this.mileage = mileage;
        this.damage = damage;
    }
    toString() {
        return `Damage: ${this.damage}, Vehicle: ${this.vin} (${this.mileage} km)`;
    }
}
exports.Vehicle = Vehicle;
//# sourceMappingURL=Vehicle.js.map