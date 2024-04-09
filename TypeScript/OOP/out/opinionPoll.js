"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get getInfo() {
        return `${this.name} is ${this.age} years old.`;
    }
}
const personInfo = "Marto 22";
const [personName, ageString] = personInfo.split(" ");
const age = parseInt(ageString);
const person = new Person(personName, age);
console.log(person.getInfo);
//# sourceMappingURL=opinionPoll.js.map