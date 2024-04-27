"use strict";
function sum(x, y) {
    let sum = 0;
    let result = "";
    for (let start = x; start <= y; start++) {
        sum += start;
        result += start + " ";
    }
    result.trim();
    result += `\nSum: ${sum}`;
    console.log(result);
}
sum(5, 10);
//# sourceMappingURL=printAndSum.js.map