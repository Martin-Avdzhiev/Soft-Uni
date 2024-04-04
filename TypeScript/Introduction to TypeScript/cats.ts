class Cat {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    meow:() => string = () => {
        return `${this.name}, age ${this.age} says Meow`;
    }
}

const createCats: (cats: string[]) => void = (cats) => {
    for (const cat of cats) {
        const name:string = cat.split(' ')[0];
        const age:number = Number(cat.split(' ')[1]);
        const newCat:Cat = new Cat(name,age);
        console.log(newCat.meow());
    }
}

createCats(["Mellow 2", "Tom 5"]);
