type Operator = '+' | '-' | '*' | '/';

function calculator(x: number, operator: Operator, y: number): string {
    switch (operator) {
        case '+':
            return (x + y).toFixed(2);
        case '-':
            return (x - y).toFixed(2);
        case '*':
            return (x * y).toFixed(2);
        case '/':
            if (y !== 0) {
                return (x / y).toFixed(2);
            } else {
                throw new Error("Division by zero is not allowed.");
            }
        default:
            throw new Error("Invalid operator.");
    }
}
console.log(calculator(5, "+", 10));
console.log(calculator(25.5, "-", 3));
console.log(calculator(9, "/", 2));
console.log(calculator(7, "*", 5));