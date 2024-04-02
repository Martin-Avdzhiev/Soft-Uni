const sum: (a:string, b:string) => number = (a,b) => {
    let total: number = 0;
    for(let i = Number(a); i <= Number(b); i++){
        total += i;
    }
    return total;
}
console.log(sum("-8","20"));