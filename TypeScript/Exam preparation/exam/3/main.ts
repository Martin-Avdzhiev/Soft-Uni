import { RepairShop } from "./RepairShop";

import { Vehicle } from "./Vehicle";

function main() {

const repairShop = new RepairShop(5);

const vehicle1 = new Vehicle("1HGCM82633A123456", 50000, "Oil leakage");

console.log(vehicle1.toString());

repairShop.addVehicle(vehicle1);

console.log(repairShop.removeVehicle("1HGCM82633A123459")); //false

console.log(repairShop.removeVehicle("1HGCM82633A123456")); //true

const vehicle2 = new Vehicle("5YJSA1CN7DFP12345", 80000, "Overheating issue");

const vehicle3 = new Vehicle("JM1GJ1W56F1234567", 120000, "Coolant leakage");

const vehicle4 = new Vehicle(

"2C3CDXAT4CH123456",

95000,

"Timing belt failure"

);

const vehicle5 = new Vehicle("WAUZZZ8K9FA123456", 66000, "Cylinder misfire");

const vehicle6 = new Vehicle(

"1G1BL52P3RR123456",

150000,

"Transmission failure"

);

const vehicle7 = new Vehicle("JTDKB20U993123456", 65000, "Piston damage");

repairShop.addVehicle(vehicle2);

repairShop.addVehicle(vehicle3);

repairShop.addVehicle(vehicle4);

repairShop.addVehicle(vehicle5);

repairShop.addVehicle(vehicle6);

repairShop.addVehicle(vehicle7);

}

main()