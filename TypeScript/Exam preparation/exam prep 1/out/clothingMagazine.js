"use strict";
class Cloth {
    constructor(color, size, type) {
        this.color = color;
        this.size = size;
        this.type = type;
    }
    toString() {
        return `${this.type} with size ${this.size}, color ${this.color}`;
    }
}
class Magazine {
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.capacity > this.clothes.length) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const index = this.clothes.findIndex((x) => x.color == color);
        if (index != -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }
    getSmallestCloth() {
        return this.clothes.sort((a, b) => a.size - b.size)[this.clothes.length - 1];
    }
    getCloth(color) {
        return this.clothes[this.clothes.findIndex((x) => x.color == color)];
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        let result = `${this.type} magazine contains:\n`;
        const sortedBySizeClothes = this.clothes.sort((a, b) => a.size - b.size);
        for (const cloth of sortedBySizeClothes) {
            result += `${cloth.toString()}\n`;
        }
        return result;
    }
}
//# sourceMappingURL=clothingMagazine.js.map