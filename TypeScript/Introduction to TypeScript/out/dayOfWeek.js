"use strict";
const dayToNumber = (day) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const index = days.indexOf(day);
    if (index != -1) {
        return index + 1;
    }
    else {
        return "error";
    }
};
console.log(dayToNumber("Monday"));
console.log(dayToNumber("asd"));
//# sourceMappingURL=dayOfWeek.js.map