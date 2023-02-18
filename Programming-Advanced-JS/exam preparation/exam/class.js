class WineSelection {
    constructor(space){
        this.space = space;
        this.wines = [];
        this.bill = 0
    }
    reserveABottle (wineName, wineType, price){
        if(this.wines.length == this.space){
            throw new Error("Not enough space in the cellar.");
        }
        this.wines.push({wineName, wineType, price, paid: false});
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
    payWineBottle( wineName, price ) {
        const types = this.wines.map(x=> x.wineName);
        if(!types.includes(wineName)){
            throw new Error(`${wineName} is not in the cellar.`)
        }
        const index = this.wines.map(x=> x.wineName).indexOf(wineName);
        if(this.wines[index].paid){
            throw new Error(`${wineName} has already been paid.`);
        }
        this.wines[index].paid = true;
        this.bill += this.wines[index].price;
        return `You bought a ${wineName} for a ${price}$.`;
    }
    openBottle(wineName) {
        const index = this.wines.map(x=> x.wineName).indexOf(wineName);
        if(index == -1){
            throw new Error("The wine, you're looking for, is not found.");
        }
        if(!this.wines[index].paid){
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        this.wines.splice(index,1);
        return `You drank a bottle of ${wineName}.`;
    }
    cellarRevision(wineType){
        const result = [];
        if(!wineType){
            const emptySlots = this.space - this.wines.length;
            result.push(`You have space for ${emptySlots} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);
            this.wines.sort((a,b)=> a.wineName.localeCompare(b.wineName));
            for(const wine of this.wines){
                let pay = '';
                if(wine.paid){
                    pay = 'Has Paid';
                }
                else {
                    pay = 'Not Paid';
                }
                result.push(`${wine.wineName} > ${wine.wineType} - ${pay}.`);
            }
            return result.join('\n');
        }
        else {
            const wineType1 = this.wines.filter(x=> x.wineType == wineType);
           // wineType1.sort((a,b)=> a.wineName.localeCompare(b.wineName));
            if(wineType1.length == 0){
                throw new Error(`There is no ${wineType} in the cellar.`)
            }
            else {
                for(const wine of wineType1){
                    let pay = '';
                if(wine.paid){
                    pay = 'Has Paid';
                }
                else {
                    pay = 'Not Paid';
                }
                    result.push(`${wine.wineName} > ${wine.wineType} - ${pay}.`)
                }
                return result.join('\n');
            }
        }
    }
}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());

