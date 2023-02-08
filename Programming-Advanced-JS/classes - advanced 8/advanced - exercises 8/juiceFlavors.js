function solve(array) {
    const bottles = {};
    const juices = {};
    for (const line of array) {
        let fruit = line.split(' => ')[0];
        let quantity = Number(line.split(' => ')[1]);
        if (juices[fruit]) {
            juices[fruit] += quantity;
        }
        else {
            juices[fruit] = 0;
            juices[fruit] += quantity;
        }
        while (juices[fruit] >= 1000) {
            if (bottles[fruit]) {
                bottles[fruit]++;
            }
            else {
                bottles[fruit] = 0;
                bottles[fruit]++;
            }
            juices[fruit] -= 1000;
        }
    }
    const entries = Object.entries(bottles);
    for(const entry of entries){
        console.log(`${entry[0]} => ${entry[1]}`)
    }
}

solve(['Orange => 2000',

'Peach => 1432',

'Banana => 450',

'Peach => 600',

'Strawberry => 549'])