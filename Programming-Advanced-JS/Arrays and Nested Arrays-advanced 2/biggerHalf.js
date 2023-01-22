function solve (array){
    array.sort((a,b) => a - b );
    let middle = Math.floor(array.length/2);
    let result = [];
    for (let i = middle; i <= array.length; i++){
        result.push(array[i]);
    }
    return result;
}

solve([3, 19, 14, 7, 2, 19, 6])