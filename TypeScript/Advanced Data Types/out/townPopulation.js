"use strict";
class Town {
    constructor(town, population) {
        this.name = town;
        this.population = population;
    }
}
function populationRegistry(data) {
    const towns = [];
    for (const line of data) {
        const town = line.split(" <-> ")[0];
        const population = Number(line.split(" <-> ")[1]);
        const existingTownIndex = towns.findIndex(x => x.name === town);
        if (existingTownIndex !== -1) {
            towns[existingTownIndex].population += population;
        }
        else {
            const newTown = new Town(town, population);
            towns.push(newTown);
        }
    }
    let result = "";
    for (const town of towns) {
        result += `${town.name} : ${town.population}\n`;
    }
    return result.trim();
}
console.log(populationRegistry(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']));
//# sourceMappingURL=townPopulation.js.map