export namespace FoodAndBeverages{
    export interface Delivery{
        newCustomer(curstomerName:string,visited:boolean):void;
        visitCustomer(curstomerName:string):void;
        showCustomers():string;
    }
}