class CarDealership {
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar (model, horsepower, price, mileage){
        if(!model || horsepower<0 || !Number.isInteger(horsepower) || price<0 || mileage<0){
            throw new Error('Invalid input!');
        }
        this.availableCars.push({model, horsepower, price, mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    sellCar (model, desiredMileage){
        let desiredModel = this.availableCars.find(x => x.model == model);
        if(!desiredModel){
            throw new Error(`${model} was not found!`);
        }
        if(desiredModel.mileage <= desiredMileage){

        }
        else if (desiredModel.mileage <= desiredMileage + 40000){
            desiredModel.price *= 0.95;
        }
        else {
            desiredModel.price *= 0.9;
        };
        let index = this.availableCars.map(x => x.model).indexOf(model);
        this.soldCars.push({
            model,
            horsepower: desiredModel.horsepower,
            soldPrice: desiredModel.price
        });
        this.totalIncome += desiredModel.price;
        this.availableCars.splice(index,1);
        return `${model} was sold for ${desiredModel.price.toFixed(2)}$`;
    }
    currentCar () {
        if(this.availableCars.length == 0){
            return "There are no available cars";
        }
        let result = [];
        result.push('-Available cars:');
        for (const car of this.availableCars){
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
        }
        return result.join('\n');
    }
    salesReport (criteria) {
        if(criteria !== 'horsepower' && criteria !== 'model'){
            throw new Error('Invalid criteria!');
        };
        if(criteria == 'horsepower'){
            this.soldCars.sort((a,b)=> b.horsepower - a.horsepower);
        }
        if(criteria == 'model'){
            this.soldCars.sort((a,b)=> a.model.localeCompare(b.model)); 
        }
        let result = [];
        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);
        for (let car of this.soldCars){
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
        }
        return result.join('\n')
    }
}
