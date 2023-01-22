function aggregate (elements){
    let sum = 0;
    let inverseSum = 0;
    let concat = '';
    for (let i = 0 ; i<elements.length; i++){
        sum += Number(elements[i]);
        inverseSum += 1/Number(elements[i]);
        concat += elements[i];
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

aggregate([1, 2, 3])