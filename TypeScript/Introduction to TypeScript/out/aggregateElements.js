"use strict";
function aggregateElements(numbers) {
    const sum = numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
    const inverseSum = numbers.reduce((acumulator, currentValue) => acumulator + 1 / currentValue, 0);
    const concat = numbers.reduce((acumulator, currentValue) => acumulator + currentValue.toString(), "");
    return `${sum}\n${inverseSum}\n${concat}`;
}
console.log(aggregateElements([1, 2, 3]));
//# sourceMappingURL=aggregateElements.js.map