function solve (array, number){
    let result = []
    for (let i = 0 ;i <array.length; i+=number){
        result.push(array[i]);
    }
    return result;
}

solve (['5',

'20',

'31',

'4',

'20'],

2)