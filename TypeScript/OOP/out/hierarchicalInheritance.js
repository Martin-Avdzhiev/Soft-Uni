"use strict";
class Animal {
    eat() {
        console.log("eating...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("barking...");
    }
}
class Cat extends Animal {
    meow() {
        console.log("meowing...");
    }
}
const mammal = new Animal;
const dog = new Dog;
const cat = new Cat;
mammal.eat();
dog.eat();
dog.bark();
cat.eat();
cat.meow();
//# sourceMappingURL=hierarchicalInheritance.js.map