type Person = {
    firstName: string;
    lastName: string;
    age: number;
}
function transformInfo(firstName:string,lastName:string,age:string): Person {
    return {
        firstName,
        lastName,
        age: Number(age)
    }
}
console.log(transformInfo("Peter", "Pan", "20"));