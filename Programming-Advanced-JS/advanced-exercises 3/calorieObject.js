function solve (array){
    let object = {};
    let product = '';
    let calories = '';
    for (let i = 0 ; i<array.length; i+=2){
            product = array[i];
            calories = array[i+1];
            object[product] = Number(calories);
    }
    console.log(object);
}

solve (['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])