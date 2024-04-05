"use strict";
function transformInfo(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age: Number(age)
    };
}
console.log(transformInfo("Peter", "Pan", "20"));
//# sourceMappingURL=personInfo.js.map