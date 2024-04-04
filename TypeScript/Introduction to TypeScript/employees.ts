class Employer{
    name:string
    personalNumber:number
    constructor(name:string, persoNalNumber:number){
        this.name = name,
        this.personalNumber = persoNalNumber
    }
    get:() => string = () => {
        return `Name: ${this.name} -- Personal Number: ${this.personalNumber}`;
    }
}
function createList(list:string[]): string{
    const employers: Employer[] = list.map(x => new Employer (x, x.length));
    const result: string[] = employers.map(x => x.get());
    return result.join("\n");
}

console.log(createList(["silas", "adnaan a buckley", "asdasd asd ada asda asd"]))