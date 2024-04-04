"use strict";
class Employer {
    constructor(name, persoNalNumber) {
        this.get = () => {
            return `Name: ${this.name} -- Personal Number: ${this.personalNumber}`;
        };
        this.name = name,
            this.personalNumber = persoNalNumber;
    }
}
function createList(list) {
    const employers = list.map(x => new Employer(x, x.length));
    const result = employers.map(x => x.get());
    return result.join("\n");
}
console.log(createList(["silas", "adnaan a buckley", "asdasd asd ada asda asd"]));
//# sourceMappingURL=employees.js.map