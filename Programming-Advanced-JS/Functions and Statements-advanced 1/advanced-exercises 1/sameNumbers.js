function solve (number){
    let sum = 0;
    number = number.toString()
    let a = number.toString().split('').filter(n => n!= number[0]).length
    let isSame = number.toString().split('').filter(n => n!= number[0]).length ? false : true;
    for (const digit of number.toString()) {
        sum += Number(digit);
    }
    return `${isSame}\n${sum}`;
}

solve(2222222)