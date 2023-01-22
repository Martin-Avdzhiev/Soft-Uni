function solve (array){
    let result = [];
    array.sort((a,b) => a - b );
    result.push(array[0]);
    result.push(array[1]);
    return result;
}

solve ([30, 15, 50, 5])