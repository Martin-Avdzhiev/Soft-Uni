function solve(array) {
    let object = {};
    let currentLine = array.shift().split(' <-> ');
    let city = currentLine.shift();
    let population = Number(currentLine.shift());
    let length = array.length;
    while (length >= 0) {
        if (object[city]) {
            object[city] += population;
        }
        else {
            object[city] = population;
        }
        if (length !== 0) {
            currentLine = array.shift().split(' <-> ');
            city = currentLine.shift();
            population = Number(currentLine.shift());
        }
        length--;
    }
    let entries = Object.entries(object);
    for (const entry of entries) {
        console.log(`${entry[0]} : ${entry[1]}`)
    }
}

solve(['Istanbul <-> 100000', 'Hong Kong <-> 2100004', 'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925', 'Istanbul <-> 1000'])