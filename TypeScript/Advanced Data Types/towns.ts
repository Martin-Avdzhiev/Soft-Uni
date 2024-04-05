class TownClass{
    town: string;
    latitude: string;
    longitude: string;
    constructor(town: string, latitude: string, longitude: string) {
        this.town = town
        this.latitude = latitude
        this.longitude = longitude
    }
}
const getTowns: (arr:string[]) => TownClass[] = (arr) => {
    const result:TownClass[] = [];
    for (const data of arr) {
        const info = data.split(" | ");
        const town = new TownClass(info[0],Number(info[1]).toFixed(2),Number(info[2]).toFixed(2));
        result.push(town);
    }
    return result;
}
console.log(getTowns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]));