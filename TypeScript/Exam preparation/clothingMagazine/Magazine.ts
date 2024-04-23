import { Cloth } from "./Cloth";
class Magazine {
    type: string;
    capacity: number;
    clothes: Cloth[];
    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity
        this.clothes = [];
    }
    addCloth(cloth: Cloth): void {
        if (this.capacity > this.clothes.length) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color: string): boolean {
        const index = this.clothes.findIndex((x) => x.color == color);
        if (index != -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }
    getSmallestCloth(): Cloth {
        return this.clothes.sort((a, b) => b.size - a.size)[this.clothes.length - 1];
    }
    getCloth(color: string): Cloth | number {
        return this.clothes[this.clothes.findIndex((x) => x.color == color)];
    }
    getClothCount(): number {
        return this.clothes.length;
    }
    report(): string {
        let result: string = `${this.type} magazine contains:\n`;
        const sortedBySizeClothes: Cloth[] = this.clothes.sort((a, b) => a.size - b.size);
        for (const cloth of sortedBySizeClothes) {
            result += `${cloth.toString()}\n`;
        }
        return result;
    }
}

export { Magazine }