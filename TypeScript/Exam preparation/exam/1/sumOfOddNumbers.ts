function sumOddNumbers(odds: number): void {
    let sum: number = 0;
    let result = "";
    for (let start = 1; start <= odds*2-1; start+=2) {
        sum += start;
        result+= start + "\n";
    }
    result += `Sum: ${sum}`;
    console.log(result);
}
sumOddNumbers(5);