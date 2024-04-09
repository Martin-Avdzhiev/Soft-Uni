"use strict";
class BankAccount {
    constructor(balance) {
        this.id = BankAccount.nextId++;
        this.balance = balance;
    }
    // default is public
    deposit(amount) {
        this.balance += amount;
    }
    static setInterestRate(newInterestRate) {
        BankAccount.interestRate = newInterestRate;
    }
    getInterest(years) {
        return BankAccount.interestRate * years * this.balance;
    }
}
BankAccount.nextId = 1;
BankAccount.interestRate = 0.02;
const clients = [];
function create() {
    const newClient = new BankAccount(0);
    clients.push(newClient);
    console.log(`Account ID${newClient.id} created`);
}
function findCliendById(id) {
    return clients.find((x) => x.id == id);
}
function deposit(id, amount) {
    const client = findCliendById(id);
    if (client) {
        client.deposit(amount);
        console.log(`Deposited ${amount} to ID${id}`);
    }
    else {
        console.log("Account does not exist");
    }
}
function getInterest(id, years) {
    const client = findCliendById(id);
    if (client) {
        return client.getInterest(years).toFixed(2);
    }
    else {
        return "Account does not exist";
    }
}
create();
create();
deposit(1, 20);
deposit(3, 20);
deposit(2, 10);
BankAccount.setInterestRate(1.5);
console.log(getInterest(1, 1));
console.log(getInterest(2, 1));
console.log(getInterest(3, 1));
console.table(clients);
//# sourceMappingURL=bankAccount.js.map