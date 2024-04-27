// class City {
//     name: string;
//     population: number;
//     treasury: number;
//     taxRate: number;
//     collectTaxes: () => void;
//     applyGrowth: (percentage: number) => void;
//     applyRecession: (percentage: number) => void;
//     constructor(name: string, population: number, treasury: number) {
//         this.name = name;
//         this.population = population;
//         this.treasury = treasury;
//         this.taxRate = 10;
//         this.collectTaxes = (): void => {
//             this.treasury += Math.floor(this.population * this.taxRate);
//         }
//         this.applyGrowth = (percentage: number): void => {
//             this.population += Math.floor(this.population * percentage / 100);
//         }
//         this.applyRecession = (percentage: number): void => {
//             this.treasury -= Math.floor(this.treasury * percentage / 100);
//         }
//     }

// }

// collectTaxes = (): void => {
//     treasury += Math.floor(this.population * this.taxRate);
// }
// applyGrowth = (percentage: number): void => {
//     this.population += Math.floor(this.population * percentage / 100);
// }
// applyRecession = (percentage: number): void => {
//     this.treasury -= Math.floor(this.treasury * percentage / 100);
// }
type City = {
    name: string;
    population: number;
    treasury: number;
    taxRate: number;
    collectTaxes: () => void;
    applyGrowth: (percentage: number) => void;
    applyRecession: (percentage: number) => void;
}
function cityTaxes(name: string, population: number, treasury: number): City {
    const city: City = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: ():void => { city.treasury += Math.floor(city.population * city.taxRate) },
        applyGrowth :(percentage: number): void => {city.population += Math.floor(city.population * percentage / 100);},
        applyRecession :(percentage: number): void => {city.treasury -= Math.floor(city.treasury * percentage / 100);;}
    }
    return city;
}

const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
console.log(city);