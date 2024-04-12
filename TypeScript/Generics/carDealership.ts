interface Dealership<T> {
    dealershipName:T;
    soldCars: number;
}
interface Actions<T>{
    sellCar(dealerId:T,model:T):void;
}
class CarDealership<T> implements Dealership<T>, Actions<T>{
    dealershipName: T;
    soldCars: number;
    modelsSold: { [key:string]: T };
    constructor(dealershipName: T){
        this.dealershipName = dealershipName;
        this.soldCars = 0;
        this.modelsSold = {};
    }
    sellCar(dealerId: T, model: T): void {
        this.modelsSold[String(dealerId)] = model;
        this.soldCars++;
    }
    showDetails():string{
        let message = this.dealershipName + "\n";
        for (const key in this.modelsSold) {
           message+= `${key} sold ${this.modelsSold[key]}\n`;
        }
        return message;
    }
}
let dealership = new CarDealership('SilverStar');

dealership.sellCar('BG01', 'C Class');

dealership.sellCar('BG02', 'S Class');

dealership.sellCar('BG03', 'ML Class');

dealership.sellCar('BG04', 'CLK Class');

console.log(dealership.showDetails());
