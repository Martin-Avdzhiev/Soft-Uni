function solve (array){
    array = array.map(n => n = Number(n));
    let first = array.pop();
    let second = array.shift();
    let result = first + second;
    return result
}

solve (['20', '30', '40'])