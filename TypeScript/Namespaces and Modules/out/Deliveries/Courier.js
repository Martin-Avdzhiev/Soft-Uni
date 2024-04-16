"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Courier {
    constructor(array) {
        this.placesToVisit = [{ [array[0].customerName]: array[0].visited }];
    }
    newCustomer(customerName, visited = false) {
        const isAlreadyCustomer = this.placesToVisit.some((x) => x.hasOwnProperty(customerName));
        if (isAlreadyCustomer == false) {
            this.placesToVisit.push({ [customerName]: visited });
            console.log(`${customerName} just became your client.`);
        }
        else {
            console.log(`${customerName} is already a customer of yours!`);
        }
    }
    visitCustomer(customerName) {
        const index = this.placesToVisit.findIndex((x) => x.hasOwnProperty(customerName));
        if (index != -1) {
            this.placesToVisit[index][customerName] = true;
        }
        else {
            console.log(`${customerName} is not your customer`);
        }
    }
    showCustomers() {
        let message = "";
        for (const object of this.placesToVisit) {
            const key = Object.keys(object)[0];
            const value = Object.values(object)[0];
            message += `${key} -> ${value}\n`;
        }
        return message.trim();
    }
}
let courier = new Courier([{ customerName: 'DHL', visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());
//# sourceMappingURL=Courier.js.map