class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.avaiableProducts = [];
    }
    loadingVegetables(vegetables) {
        const result = [];
        //result.push('Successfully added ');
        for (const string of vegetables) {
            const type = string.split(' ')[0];
            const quantity = Number(string.split(' ')[1]);
            const price = Number(string.split(' ')[2]);
            const index = this.avaiableProducts.map(x => x.type).indexOf(type);
            if (index == -1) {
                this.avaiableProducts.push({ type, quantity, price });
            }
            else {
                this.avaiableProducts[index].quantity += quantity;
                if (this.avaiableProducts[index].price < price) {
                    this.avaiableProducts[index].price = price;
                }
            }

            if (result.includes(type)) {

            }
            else {
                result.push(type);
            }
        }
        return 'Successfully added ' + result.join(', ');
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (const product of selectedProducts) {
            const type = product.split(' ')[0];
            const quantity = Number(product.split(' ')[1]);

            if (!this.avaiableProducts.map(x => x = x.type).includes(type)) {
                throw new Error(`${type} is not available in the store, your current bill is $${(totalPrice).toFixed(2)}.`)
            }
            const index = this.avaiableProducts.map(x => x = x.type).indexOf(type);
            if (this.avaiableProducts[index].quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            this.avaiableProducts[index].quantity -= quantity;
            totalPrice += quantity * this.avaiableProducts[index].price;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }
    rottingVegetable(type, quantity) {
        if (!this.avaiableProducts.map(x => x = x.type).includes(type)) {
            throw new Error(`${type} is not available in the store.`);
        }
        const index = this.avaiableProducts.map(x => x = x.type).indexOf(type);
        if (this.avaiableProducts[index].quantity <= quantity) {
            this.avaiableProducts[index].quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }
        else {
            this.avaiableProducts[index].quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    }
    revision (){
        const result = [];
        result.push('Available vegetables:');
        this.avaiableProducts.sort((a,b)=> a.price - b.price);
        for(const product of this.avaiableProducts){
            result.push(`${product.type}-${product.quantity}-$${product.price}`)
        }
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());




