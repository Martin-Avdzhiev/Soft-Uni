"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairShop = void 0;
class RepairShop {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    addVehicle(vehicle) {
        if (this.capacity > this.vehicles.length) {
            this.vehicles.push(vehicle);
        }
    }
    removeVehicle(vin) {
        const vehicleIndex = this.vehicles.findIndex((x) => x.vin == vin);
        if (vehicleIndex != -1) {
            this.vehicles.splice(vehicleIndex, 1);
            return true;
        }
        return false;
    }
    get getCount() {
        return this.vehicles.length;
    }
    getLowestMileage() {
        let lowestMileage = Number.MAX_SAFE_INTEGER;
        this.vehicles.forEach((x) => {
            if (x.mileage < lowestMileage) {
                lowestMileage = x.mileage;
            }
        });
        let lowestMileageVehicle = this.vehicles.find((x) => x.mileage == lowestMileage);
        return lowestMileageVehicle === null || lowestMileageVehicle === void 0 ? void 0 : lowestMileageVehicle.toString();
    }
    report() {
        let result = "Vehicles in the preparatory:\n";
        this.vehicles.forEach((x) => {
            result += x.toString() + "\n";
        });
        return result;
    }
}
exports.RepairShop = RepairShop;
//# sourceMappingURL=RepairShop.js.map