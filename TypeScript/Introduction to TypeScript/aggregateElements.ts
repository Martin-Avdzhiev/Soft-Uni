function aggregateElements(numbers: number[]): string {
    const sum: number = numbers.reduce((acumulator:number, currentValue:number) => acumulator + currentValue, 0);
    const inverseSum:number = numbers.reduce((acumulator:number, currentValue:number) => acumulator + 1/currentValue, 0);
    const concat:string = numbers.reduce((acumulator:string, currentValue:number) => acumulator + currentValue.toString(), "");
    return `${sum}\n${inverseSum}\n${concat}`
}
console.log(aggregateElements([1,2,3]));