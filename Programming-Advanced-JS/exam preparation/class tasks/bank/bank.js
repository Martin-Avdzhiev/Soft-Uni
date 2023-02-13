class Bank {
    #bankName;
    constructor(bankName){
        this.#bankName = bankName;
        this.allCustomers = [];
    };
    newCustomer (customer){
        const findCustomer = this.allCustomers.find(x=> x.personalId == customer.personalId);
        if(findCustomer){
            throw new Error (`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        else {
            this.allCustomers.push(customer);
            return customer;
        }; 
    };
    depositMoney (personalId, amount){
        const findId = this.allCustomers.find(x=> x.personalId == personalId);//We have no customer with this ID!
        const personIndex = this.allCustomers.map(x=> x.personalId).indexOf(personalId);
        if(!findId){
            throw new Error ('We have no customer with this ID!');
        }
        else {
            if(this.allCustomers[personIndex].hasOwnProperty('totalMoney')){
                this.allCustomers[personIndex].totalMoney += Number(amount);
            }
            else {
                this.allCustomers[personIndex].totalMoney = 0;
                this.allCustomers[personIndex].totalMoney += Number(amount);
            };
            if(!this.allCustomers[personIndex].hasOwnProperty('transactions')){
                this.allCustomers[personIndex].transactions = [];
                this.allCustomers[personIndex].transactions.push(`${this.allCustomers[personIndex].firstName} ${this.allCustomers[personIndex].lastName} made deposit of ${amount}$!`);
            }
            else {
                this.allCustomers[personIndex].transactions.push(`${this.allCustomers[personIndex].firstName} ${this.allCustomers[personIndex].lastName} made deposit of ${amount}$!`);
            } 
            return this.allCustomers[personIndex].totalMoney + '$';
        };
    };

    //this.allCustomers[personIndex].transactions.push(`${this.allCustomers[personIndex].firstName} ${this.allCustomers[personIndex].lastName} made deposit of ${amount}$`);
    withdrawMoney (personalId, amount){
        const findId = this.allCustomers.find(x=> x.personalId == personalId);//We have no customer with this ID!
        if(!findId){
            throw new Error ('We have no customer with this ID!');
        }
        else {
            const personIndex = this.allCustomers.map(x=> x.personalId).indexOf(personalId);
            if(this.allCustomers[personIndex].hasOwnProperty('totalMoney')){
                if(this.allCustomers[personIndex].totalMoney <amount){
                    throw new Error(`${this.allCustomers[personIndex].firstName} ${this.allCustomers[personIndex].lastName} does not have enough money to withdraw that amount!`);
                }
                else if(!this.allCustomers[personIndex].hasOwnProperty('transactions')){
                    this.allCustomers[personIndex].transactions = [];
                    this.allCustomers[personIndex].transactions.push(`${this.allCustomers[personIndex].firstName} ${this.allCustomers[personIndex].lastName} withdrew ${amount}$!`);
                    this.allCustomers[personIndex].totalMoney -= amount;
                }
                else {
                    this.allCustomers[personIndex].transactions.push(`${this.allCustomers[personIndex].firstName} ${this.allCustomers[personIndex].lastName} withdrew ${amount}$!`);
                    this.allCustomers[personIndex].totalMoney -= amount
                } 
                return `${ this.allCustomers[personIndex].totalMoney}$`;
            }
            else {
                throw new Error(`${this.allCustomers[personIndex].firstName} ${this.allCustomers[personIndex].lastName} does not have enough money to withdraw that amount!`);
            };
        }
    }

    customerInfo (personalId){
        const findId = this.allCustomers.find(x=> x.personalId == personalId);//We have no customer with this ID!
        if(!findId){
            throw new Error ('We have no customer with this ID!');
        }
        const personIndex = this.allCustomers.map(x=> x.personalId).indexOf(personalId);
        const person = this.allCustomers[personIndex];
        const result = [];
        result.push(`Bank name: ${this.#bankName}`);
        result.push(`Customer name: ${person.firstName} ${person.lastName}`);
        result.push(`Customer ID: ${person.personalId}`);
        if(!person.hasOwnProperty('totalMoney')){
            person.totalMoney = 0;
        };
        result.push(`Total Money: ${person.totalMoney}$`);
        result.push('Transactions:');
        person.transactions = person.transactions.reverse();
        for(let i = 0; i<person.transactions.length; i++){
            result.push(`${person.transactions.length - i}. ${person.transactions[i]}`);
        }
        return result.join('\n');

    }
}
