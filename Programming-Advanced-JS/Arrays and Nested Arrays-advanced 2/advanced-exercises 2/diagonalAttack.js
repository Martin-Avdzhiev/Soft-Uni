function solve(array) {
    let matrix = [];
    let row = '';
    let sum = 0;
    let reverseSum = 0;
    for (let i = 0 ; i<array.length; i++){
        row = array[i].split(' ').map(n => Number(n));
        matrix.push(row);
    }
    for (let i = 0; i<matrix.length; i++){
        for (let j = 0; j<matrix.length; j++){
            if (i == j){
                sum += matrix[i][i];
            }
        }
    }
    for (let i = 0 ; i<matrix.length; i++){
        matrix[i].reverse();
    }

    for (let i = 0; i<matrix.length; i++){
        for (let j = 0; j<matrix.length; j++){
            if (i == j){
                reverseSum += matrix[i][i];
            }
        }
    }

    for (let i = 0 ; i<matrix.length; i++){
        matrix[i].reverse();
    }

    if (sum == reverseSum){
        for (let i = 0; i<matrix.length; i++){
            for (let j = 0; j<matrix.length; j++){
                if (i == j || i+j == matrix.length-1){
                    
                }
                else {
                    matrix[i][j] = sum;
                }
            }
        }
        for (let i = 0 ; i<matrix.length; i++){
            console.log(matrix[i].join(' '));
        }
    }
    else {
        for (let i = 0 ; i<matrix.length; i++){
            console.log(matrix[i].join(' '));
        }
    }
}

solve(['5 3 12 3 1',

'11 4 23 2 5',

'101 12 3 21 10',

'1 4 5 2 2',

'5 22 33 11 1'])