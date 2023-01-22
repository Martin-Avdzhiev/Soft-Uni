function solve (array){
    array.sort((a,b) => a.localeCompare(b));
    let result = {};
    for(let line of array){
        let [product,price] = line.split(' : ');
        let firstLetter = product[0];
        if (result[firstLetter]){
            result[firstLetter].push(product,price);
        }
        else {
            result[firstLetter] = [];
            result[firstLetter].push(product,price);
        }
    }
    for (let letter of Object.keys(result)){
        console.log(letter);
        for(let i = 0; i<result[letter].length; i+=2){
            console.log(`  ${result[letter][i]}: ${result[letter][i+1]}`);
        }
    }
    
}

solve(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])
//A Anti-Bug Spray: 15 Apple: 1.25 Appricot: 20.4 B Boiler: 300 D Deodorant: 10 F Fridge: 1500 T T-Shirt: 10 TV: 1499