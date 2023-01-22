function solve (array){
    let count = 1;
    array.sort((a,b)=> a.localeCompare(b));
    for (let i = 0; i< array.length; i++){
        console.log(`${count}.${array[i]}`);
        count++;
    }
}

solve (["John",

"Bob",

"Christina",

"Ema"])