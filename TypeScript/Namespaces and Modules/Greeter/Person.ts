import { Greeter } from "./greeter";
class Person implements Greeter.Greeting<string> {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    introduction(): string {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
    sayGoodbye(name: string): string {
        return `Dear ${this.name}, it was a pleasure meetrin you!`;
    }
}

let p = new Person('Ivan Ivanov', 25);

console.log(p.introduction());

console.log(p.sayGoodbye('Petar Petrov'));