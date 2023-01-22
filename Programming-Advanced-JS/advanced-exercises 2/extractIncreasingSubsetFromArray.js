function solve(array) {
    let result = [array.shift()];
    for (let i = 0 ; i<array.length; i++){
        if (array[i]>=result[result.length-1]){
            result.push(array[i]);
        }
    }
    return result;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24])