function solve (array){
    let newArr = [];
    for (let i = 0 ; i<array.length; i+=2){
        newArr.push(array[i])
    }
    console.log(newArr.join(' '));
}

solve(['20', '30', '40',

'50', '60'])