function solve(array) {
    let [a,b,c] = array.shift().split(' | ');
    let result = [];
    a = a.replace('| ','');
    c = c.replace(' |','');
    for (let line of array) {
        let [town,lat,long] = line.split(' | ');
        town = town.replace('| ','');
        long = long.replace(' |','');
        let object = {
            [a]: town,
            [b]: Number((Number(lat).toFixed(2))),
            [c]: Number((Number(long).toFixed(2)))
        }
        result.push(object)
        
    }
    let final = JSON.stringify(result);
    console.log(final)
}

solve(['| Town | Latitude | Longitude |',

'| Veliko Turnovo | 43.0757 | 25.6172 |',

'| Monatevideo | 34.50 | 56.11 |'])