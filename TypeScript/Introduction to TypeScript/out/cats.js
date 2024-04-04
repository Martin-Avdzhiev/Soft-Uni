"use strict";
class Cat {
    constructor(name, age) {
        this.meow = () => {
            return `${this.name}, age ${this.age} says Meow`;
        };
        this.name = name;
        this.age = age;
    }
}
const createCats = (cats) => {
    for (const cat of cats) {
        const name = cat.split(' ')[0];
        const age = Number(cat.split(' ')[1]);
        const newCat = new Cat(name, age);
        console.log(newCat.meow());
    }
};
createCats(["Mellow 2", "Tom 5"]);
//# sourceMappingURL=cats.js.map