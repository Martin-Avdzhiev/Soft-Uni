function solve (matrix){
    let boolean = true;
    let sum = 0;
    const length = matrix.length;
    for (let i = 0 ; i<matrix[0].length; i++){
        sum += Number(matrix[0][i]);
    }

    for (let i = 0 ; i < length; i++){
        let currentRowSum = 0;
        let currentColumSum = 0;
        for (let j = 0 ; j < length; j++){ 
            currentRowSum += Number(matrix[i][j]);
            
        }
        
        for (let x = 0 ; x< length; x++){
            currentColumSum += Number(matrix[x][i]);
            
        }
            if (currentRowSum !== sum || currentColumSum !==sum){
                boolean = false;
                return boolean;
            }
        currentRowSum = 0;
        currentColumSum = 0;
    }

    return boolean;
}

solve ([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]])