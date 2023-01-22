function solve (array){
    // product : [cena, grad]
    let result = {}
    for (let line of array){
        let town = line.split(' | ')[0];
        let product = line.split(' | ')[1];
        let price = line.split(' | ')[2];
        price = Number(price);
        
        if(result[product]){
            if(result[product][0]>price){
                result[product][0] = price;
                result[product][1] = town
            }
        }
        else {
            result[product] = [price,town];
           
        }
    }
    for(const entry of Object.entries(result)){
        console.log(`${entry[0]} -> ${entry[1][0]} (${entry[1][1]})`);
    }
}   

solve(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10'])