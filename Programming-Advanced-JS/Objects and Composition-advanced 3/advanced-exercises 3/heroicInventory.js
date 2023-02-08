function solve (array){
    let currentLine = array.shift().split(' / ');
    let currentName = currentLine.shift();
    let currentLevel = currentLine.shift();
    currentLine = currentLine.toString().split(', ');
    if(currentLine[0].length== 0){
        currentLine = [];
    }
    let currentObject = {
        name: currentName,
        level: Number(currentLevel),
        items: currentLine
    };
    let result = [];
    result.push(currentObject);
    for (const line of array){
        currentLine = line.split(' / ');
        currentName = currentLine.shift();
        currentLevel = currentLine.shift();
        currentLine = currentLine.toString().split(', ');
        if(currentLine[0].length== 0){
            currentLine = [];
        }
        currentObject = {
            name: currentName,
            level: Number(currentLevel),
            items: currentLine
        };
        result.push(currentObject);
    }
    console.log(JSON.stringify(result))
    
}

solve(['Isacc / 25 / ',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'])

//[{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]