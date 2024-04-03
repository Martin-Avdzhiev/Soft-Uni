"use strict";
const even = (array) => {
    let result = [];
    for (let index = 0; index < array.length; index += 2) {
        result.push(array[index]);
    }
    return result.join(" ");
};
console.log(even(['20', '30', '40', '50', '60']));
//# sourceMappingURL=evenPosition.js.map