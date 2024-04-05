"use strict";
const transform = (arr) => {
    const foods = arr.filter((x, index) => index % 2 == 0);
    const calories = arr.filter((x, index) => index % 2 == 1).map((x) => Number(x));
    const result = {};
    for (let i = 0; i < foods.length; i++) {
        result[foods[i]] = calories[i];
    }
    return result;
};
console.log(transform(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));
//# sourceMappingURL=calorieObject.js.map