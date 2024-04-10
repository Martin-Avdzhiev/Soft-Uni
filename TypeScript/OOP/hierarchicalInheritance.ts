class Animal {
   public eat() {
        console.log("eating...")
    }
}
class Dog extends Animal{
    public bark() {
        console.log("barking...")
    }
}
class Cat extends Animal{
    public meow() {
        console.log("meowing...")
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