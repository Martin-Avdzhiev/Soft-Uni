"use strict";
const biggerHalf = (array) => {
    const sortedArray = array.sort((a, b) => a - b);
    const isEvenLength = sortedArray.length % 2 == 0;
    if (isEvenLength) {
        sortedArray.splice(0, sortedArray.length / 2);
    }
    else {
        sortedArray.splice(0, Math.floor(sortedArray.length) / 2);
    }
    return sortedArray;
};
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
//# sourceMappingURL=biggerHalf.js.map