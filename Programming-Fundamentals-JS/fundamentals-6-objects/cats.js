function createCat (array){
    class Cat {
        constructor(name,age) {
            this.name = name;
            this.age = age;
        }
    meow () {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
    
    }
    for (const line of array) {
        let [name, age] = line.split(` `);
        let cat = new Cat (name,age);
        cat.meow();
    }

}

createCat (['Mellow 2', 'Tom 5'])