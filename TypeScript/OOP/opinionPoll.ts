class Person {
    name: string;
    age: number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    get getInfo():string{
        return `${this.name} is ${this.age} years old.`
    }
}
const personInfo = "Marto 22";
const [personName, ageString] = personInfo.split(" ");
const age = parseInt(ageString);
const person = new Person(personName, age);
console.log(person.getInfo);
