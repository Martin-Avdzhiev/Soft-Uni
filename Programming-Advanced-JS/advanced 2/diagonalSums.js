function solve (matrix){
    let first = 0;
    let second = 0;
    for (let i = 0; i<matrix.length; i++){
        for (let j = 0 ; j<matrix.length; j++){
            if (i == j){
                first += matrix[i][j];
            }
        }
    }
    matrix.reverse();
    for (let i = 0; i<matrix.length; i++){
        for (let j = 0 ; j<matrix.length; j++){
            if (i == j){
                second += matrix[i][j];
            }
        }
    }
    let result = [];
    result.push(first);
    result.push(second);
    return result.join(' ');
}

solve ([[20, 40],
        [10, 60]])