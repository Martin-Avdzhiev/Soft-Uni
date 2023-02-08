function solve (array,number){
    let last = '';
    for (let i = 0; i<number; i++){
        last = array.pop();
        array.unshift(last);
    }
    return array.join(' ');
}

solve (['1',

'2',

'3',

'4'],

2)