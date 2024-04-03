"use strict";
function math(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            }
            else {
                return "Cannot divide by zero";
            }
        case '%':
            return a % b;
        case '**':
            return Math.pow(a, b);
        default:
            return "Invalid operator";
    }
}
console.log(math(5, 6, '+'));
console.log(math(5, 3, '-'));
console.log(math(3, 5.5, '*'));
console.log(math(5, 3, '/'));
console.log(math(5, 0, '/'));
console.log(math(5, 3, '%'));
console.log(math(5, 3, '**'));
console.log(math(5, 3, '&'));
//# sourceMappingURL=mathOperations.js.map