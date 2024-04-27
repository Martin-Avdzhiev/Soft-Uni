class Town {
    townName: string;
    product: string;
    price: number;
    constructor(townName: string, product: string, price: number) {
        this.townName = townName;
        this.product = product;
        this.price = price;
    }
}
function lowestPricesInCities(towns: string[]): string {
    const lowestPricesTowns: Town[] = [];
    for (const line of towns) {
        const [townName, product, price] = line.split(" | ");
        const town:Town = new Town(townName, product, Number(price));
        const sameProductTownIndex:number = lowestPricesTowns.findIndex((x) => x.product == product);
        if(sameProductTownIndex != -1){
            if (lowestPricesTowns[sameProductTownIndex].price > Number(price)) {
                lowestPricesTowns.splice(sameProductTownIndex, 1, town);
            }
        }
        else {
            lowestPricesTowns.push(town);
        }
    }
    let result:string = "";
    for (const lowestPricesTown of lowestPricesTowns) {
        result += `${lowestPricesTown.product} -> ${lowestPricesTown.price} (${lowestPricesTown.townName})\n`;
    }

    return result
}
console.log(lowestPricesInCities(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10']));