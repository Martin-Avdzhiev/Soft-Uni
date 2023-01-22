function solve (array){
    let result = [];
    let count = 1;
    for (const command of array){
        if (command == 'add'){
            result.push(count);
            count ++
        }
        else {
            result.pop();
            count ++
        }
    }
    if (result.length == 0){
        return 'Empty'
    }
    else {
        return result.join('\n');
    }
}

solve (['add', 'add', 'remove', 'add', 'add'])