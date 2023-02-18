class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
        this.names = [];
        this.quantity = [];
        this.counter = 0;
    };
    loadingStore(product, quantity, spaceRequired){
        if(this.warehouseSpace - spaceRequired<0){
            throw new Error('Not enough space in the warehouse.');
        }
        this.warehouseSpace -=spaceRequired;
        this.products.push({[product]:quantity});
        this.names.push(product);
        this.quantity.push(quantity);
        return `The ${product} has been successfully delivered in the warehouse.`;
    };
    quantityCheck(product, minimalQuantity){
        const index = this.names.indexOf(product);
        if(index == -1){
            throw new Error(`There is no ${product} in the warehouse."`);
        };
        let quantity = this.quantity[index];
        const name = this.names[index];
        if(minimalQuantity <=0){
            throw new Error('The quantity cannot be zero or negative.');
        }
        else if(quantity - minimalQuantity <0) {
            const diff =  minimalQuantity - quantity;
            this.quantity[index] += diff;
            return `You added ${diff} more from the ${name} products.`
        }
        else {
            return `You have enough from product ${name}.`
        }
    }
    sellProduct(product) {
        const index = this.names.indexOf(product);
        if(index == -1){
            throw new Error(`There is no ${product} in the warehouse."`);
        };
        this.quantity[index] -= 1;
        this.sales.push({[product]: 1});
        this.boolean = true;
        this.counter++;
        return `The ${product} has been successfully sold.`
    }
    revision(){
        if(this.counter == 0){
            throw new Error('There are no sales today!');
        }
        const result = [];
        result.push(`You sold ${this.counter} products today!`);
        result.push('Products in the warehouse:');
        `{product}-{quantity} more left`;
        for(let i = 0 ;i<this.names.length; i++){
            result.push(`${this.names[i]}-${this.quantity[i]} more left`);
        }
        return result.join('\n')
    }
}


const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


