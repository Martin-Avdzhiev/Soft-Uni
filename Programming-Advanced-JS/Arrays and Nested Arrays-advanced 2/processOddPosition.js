function solve (array){
    let result = [];
    for (let i =1; i<array.length; i+=2){
        result.push(array[i]);
    }
    result = result.map(n => n = n*2).reverse();
    return result;
}

solve ([10, 15, 20, 25])