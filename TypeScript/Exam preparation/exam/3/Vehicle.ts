class Vehicle {
    vin: string;
    mileage: number;
    damage: string;
    constructor(vin: string, mileage: number, damage: string) {
        this.vin = vin;
        this.mileage = mileage;
        this.damage = damage;
    }
    toString(): string {
        return `Damage: ${this.damage}, Vehicle: ${this.vin} (${this.mileage} km)`;
    }
}
export { Vehicle }