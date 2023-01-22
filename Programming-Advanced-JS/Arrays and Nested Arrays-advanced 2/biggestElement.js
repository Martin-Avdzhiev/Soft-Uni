function solve (matrix){
    let biggests = [];
    for (let i = 0 ; i<matrix.length; i++){
        matrix[i].sort((a,b)=> a-b);
        biggests.push(matrix[i].pop());
    }
    let biggest = Number.MIN_SAFE_INTEGER;
    for (let i = 0 ; i<biggests.length; i++){
        if (biggest<biggests[i]){
            biggest = biggests[i];
        }
    }
    console.log(biggest)
}

solve ([[], [], []])