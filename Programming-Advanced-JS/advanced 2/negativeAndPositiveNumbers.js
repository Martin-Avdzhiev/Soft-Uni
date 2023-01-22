function solve (array){
    let result = [];
    for (const digit of array) {
        if (digit < 0){
            result.unshift(digit);
        }
        else {
            result.push(digit)
        }
    }
    return result;
}

solve ([7, -2, 8, 9])