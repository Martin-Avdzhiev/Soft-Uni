"use strict";
function printTowns(array) {
    const result = [];
    for (const town of array) {
        const townName = town.split(" <-> ")[0];
        const population = Number(town.split(" <-> ")[1]);
        const index = result.findIndex((x) => x.townName == townName);
        if (index == -1) {
            result.push({ townName, population });
        }
        else {
            result[index].population += population;
        }
    }
    let finalString = "";
    for (const town of result) {
        finalString += `${town.townName} : ${town.population}\n`;
    }
    finalString.trim();
    return finalString;
}
console.log(printTowns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']));
//# sourceMappingURL=townPopulation.js.map