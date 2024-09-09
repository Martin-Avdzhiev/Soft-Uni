import { Vehicle } from "./Vehicle";
class RepairShop {
    vehicles: Vehicle[];
    capacity: number;
    constructor(capacity: number) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    addVehicle(vehicle: Vehicle): void {
        if (this.capacity > this.vehicles.length) {
            this.vehicles.push(vehicle);
        }
    }
    removeVehicle(vin: string): boolean {
        const vehicleIndex: number = this.vehicles.findIndex((x) => x.vin == vin);
        if (vehicleIndex != -1) {
            this.vehicles.splice(vehicleIndex, 1);
            return true;
        }
        return false;
    }
    get getCount(): number {
        return this.vehicles.length;
    }
    get getLowestMileage(): string | void {
        let lowestMileage: number = Number.MAX_SAFE_INTEGER;
        this.vehicles.forEach((x) => {
            if (x.mileage < lowestMileage) {
                lowestMileage = x.mileage;
            }
        });
        let lowestMileageVehicle: Vehicle | undefined = this.vehicles.find((x) => x.mileage == lowestMileage);
        return lowestMileageVehicle?.toString();
    }
    report(): string {
        let result = "Vehicles in the preparatory:\n";
        this.vehicles.forEach((x) => {
            result += x.toString() + "\n";
        })
        return result;
    }
}

export { RepairShop }