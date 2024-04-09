class Car{
    brand: string;
    model: string;
    horsePower: string;
    constructor(brand:string,model:string,horsePower:string){
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }
    get getBrand():string{
        return this.brand;
    }
    set setModel(newModel:string){
        if(newModel.length<=4){
            throw new Error("The model must be at least 5 characters");
        }
        this.model = newModel;
    }
}
const ford = new Car("ford","mmustang","200");
console.log(ford.getBrand);
console.log(ford.brand);
ford.setModel = "fiesta";
console.log(`The car is: ${ford.brand} ${ford.model} - ${ford.horsePower}`)