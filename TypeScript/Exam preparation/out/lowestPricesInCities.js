"use strict";
class Town {
    constructor(townName, product, price) {
        this.townName = townName;
        this.product = product;
        this.price = price;
    }
}
function lowestPricesInCities(towns) {
    const lowestPricesTowns = [];
    for (const line of towns) {
        const [townName, product, price] = line.split(" | ");
        const town = new Town(townName, product, Number(price));
        const sameProductTownIndex = lowestPricesTowns.findIndex((x) => x.product == product);
        if (sameProductTownIndex != -1) {
            if (lowestPricesTowns[sameProductTownIndex].price > Number(price)) {
                lowestPricesTowns.splice(sameProductTownIndex, 1, town);
            }
        }
        else {
            lowestPricesTowns.push(town);
        }
    }
    let result = "";
    for (const lowestPricesTown of lowestPricesTowns) {
        result += `${lowestPricesTown.product} -> ${lowestPricesTown.price} (${lowestPricesTown.townName})\n`;
    }
    return result;
}
console.log(lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']));
//# sourceMappingURL=lowestPricesInCities.js.map