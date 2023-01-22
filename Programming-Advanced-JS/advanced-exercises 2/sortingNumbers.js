function solve(array) {
    let result = [];
    if (array.length > 0) {
        array.sort((a, b) => a - b);
        if (array.length % 2 == 0) {
            let firstHalf = array.slice(0, array.length / 2);
            let secondHalf = array.slice(array.length / 2).reverse();
          
            for (let i = 0; i < firstHalf.length; i++) {
                result.push(firstHalf[i]);
                result.push(secondHalf[i]);
            }
        }
        else {
            let firstHalf = array.slice(0, Math.floor(array.length/2+1));
            let secondHalf = array.slice(Math.ceil(array.length/2)).reverse();
            
            for (let i = 0; i < firstHalf.length; i++) {
                result.push(firstHalf[i]);
                result.push(secondHalf[i]);
            }
        }
        return result;
    }
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])