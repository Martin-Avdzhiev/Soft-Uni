function solve (fruit,grams,price){
    let kilograms = grams/1000;
    console.log(`I need $${(kilograms*price).toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80)