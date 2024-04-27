import { Drink } from "./Drink";
class VendingMachine {
    drinks: Drink[];
    buttonCapacity: number;
    constructor(buttonCapacity: number) {
        this.drinks = [];
        this.buttonCapacity = buttonCapacity;
    }
    addDrink(drink: Drink): void {
        if (this.buttonCapacity > this.drinks.length) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name: string): boolean {
        const drinkIndex: number = this.drinks.findIndex((x) => x.name == name);
        if (drinkIndex != -1) {
            this.drinks.splice(drinkIndex, 1);
            return true;
        }
        return false;
    }
    getLongest(): string | void {
        let longestVolume = 0;
        this.drinks.forEach((x) => {
            if (x.volume > longestVolume) {
                longestVolume = x.volume;
            }
        });
        let longestDrink: Drink | undefined = this.drinks.find((x) => x.volume == longestVolume);
        return longestDrink?.toString();
    }
    getCheapest(): string | void {
        let cheapestPrice: number = Number.MAX_SAFE_INTEGER;
        this.drinks.forEach((x) => {
            if (x.price < cheapestPrice) {
                cheapestPrice = x.price;
            }
        });
        let cheapestDrink: Drink | undefined = this.drinks.find((x) => x.price == cheapestPrice);
        return cheapestDrink?.toString();
    }
    buyDrink(name: string): string {
        const drink = this.drinks.filter((x) => x.name == name);
        return drink.toString();
    }
    getCount(): number {
        return this.drinks.length;
    }
    report(): string {
        let result = "Drinks available:\n";
        this.drinks.forEach((x) => {
            result += x.toString() + "\n";
        })
        return result;
    }
}

export { VendingMachine }