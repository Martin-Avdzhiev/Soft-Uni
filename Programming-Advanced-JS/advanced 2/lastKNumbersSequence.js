function solve(n, k) {
    let result = [];
    let current = 0;
    for (let i = 0; i < n; i++) {
        if (i >= k) {
            for (let j = i; j > i - k; j--) {
                current += result[j - 1];
            }
            result.push(current);
            current = 0
        }
        else {
            if (i == 0) {
                result.push(1);
            }
            else {
                for (let m = result.length - 1; m >= 0; m--) {
                    current += result[m];
                }
                result.push(current);
                current = 0;
            }
        }
    }
    return result;
}

console.log(solve(8, 2))