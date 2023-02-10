function solve(array){
    const brands = {};
    for (line of array){
        const brand = line.split(' | ')[0];
        const model = line.split(' | ')[1];
        const quantity = Number(line.split(' | ')[2]);
        if(brands[brand]){
            if(brands[brand][model]){
                brands[brand][model] += quantity;
            }
            else{
                brands[brand].push(model);
                brands[brand][model] = 0;
                brands[brand][model] += quantity;
            }
        }
        else {
            brands[brand] = [];
            brands[brand].push(model);
            brands[brand][model] = 0;
            brands[brand][model] += quantity;
        }
        
    }
   let entries = Object.entries(brands);
   entries.sort((a,b)=> {
    return a[0] - b[0]
   })

   for (const entry of entries){
    const currentBrand = entry[0];
    const currentModels = entry[1];
    console.log(currentBrand);
    for(const currentModel of currentModels){
           console.log(`###${currentModel} -> ${currentModels[currentModel]}`)
    }
   }
   
}
solve(['Audi | Q7 | 1000',

'Audi | Q6 | 100',

'BMW | X5 | 1000',

'BMW | X6 | 100',

'Citroen | C4 | 123',

'Volga | GAZ-24 | 1000000',

'Lada | Niva | 1000000',

'Lada | Jigula | 1000000',

'Citroen | C4 | 22',

'Citroen | C5 | 10'])