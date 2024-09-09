"use strict";
function sumOddNumbers(odds) {
    let sum = 0;
    let result = "";
    for (let start = 1; start <= odds * 2 - 1; start += 2) {
        sum += start;
        result += start + "\n";
    }
    result += `Sum: ${sum}`;
    console.log(result);
}
sumOddNumbers(5);
//# sourceMappingURL=sumOfOddNumbers.js.map