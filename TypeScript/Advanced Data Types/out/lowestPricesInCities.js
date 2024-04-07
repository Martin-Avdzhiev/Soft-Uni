"use strict";
const lowestPrices = (array) => {
    const towns = [];
    for (const line of array) {
        const [town, product, priceStr] = line.split(" | ");
        const productLowestPrice = Number(priceStr);
        const index = towns.findIndex((x) => x.productName == product);
        if (index == -1) {
            towns.push({ townName: town, productName: product, productLowestPrice: productLowestPrice });
        }
        else {
            if (towns[index].productLowestPrice > productLowestPrice) {
                towns.splice(index, 1);
                towns.push({ townName: town, productName: product, productLowestPrice: productLowestPrice });
            }
        }
    }
    let result = "";
    for (const town of towns) {
        result += `${town.productName} -> ${town.productLowestPrice} (${town.townName})\n`;
    }
    return result.trim();
};
console.log(lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
    'Sample Town | Orange | 2',
    'Sample Town | Orange | 2']));
//# sourceMappingURL=lowestPricesInCities.js.map