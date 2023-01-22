function solve(array,first,second){
    let firstIndex = array.indexOf(first);
    let secondIndex = array.indexOf(second);
    let result = array.slice(firstIndex,secondIndex+1);
    return result;
}

solve(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie')