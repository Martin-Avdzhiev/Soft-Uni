class CreateAccount<T,V>{
    bankName:T;
    bankID:V;
    readonly ownerName:string;
    public money:number = 0;
    public recentTransactions:{[key: string]: number} = {};
    constructor(bankName:T,bankID:V,ownerName:string){
        this.bankName = bankName;
        this.bankID = bankID;
        this.ownerName = ownerName;
    }
    deposit(amount:number):void{
        this.money+=amount;
    }
    expense(amount:number,expenseType:string):void{
        if(this.money >= amount){
            this.money -= amount;
            if(this.recentTransactions[expenseType]){
                this.recentTransactions[expenseType] += amount;
            }
            else{
                this.recentTransactions[expenseType] = amount;
            }
        }
        else{
            console.log(`You cant make ${expenseType} transaction`);
        }
    }
    showDetails():string{
        let totalMoneySpentOnExpenses = 0;
        for (const key in this.recentTransactions) {
                totalMoneySpentOnExpenses += this.recentTransactions[key];
        }
        return `Bank name: ${this.bankName}\nBank ID: ${this.bankID}\nOwner name: ${this.ownerName}\nMoney: ${this.money}\nMoney spent: ${totalMoneySpentOnExpenses}`;
    }
}

let account = new CreateAccount('DSK', 101240,

'Ivan Ivanov');

account.deposit(1000);

account.deposit(1000);

account.expense(700, 'Buy new phone');

account.expense(400, 'Book a vacation');

account.expense(400, 'Book a vacation');

account.expense(100, 'Buy food');

console.log(account.showDetails());

let account2 = new CreateAccount('Fibank', 100000,

'Petar Petrol');

account2.deposit(10000);

account2.deposit(7000);

account2.expense(1200, 'Buy a new car');

account2.expense(200, 'Go to a fancy restaurant');

account2.expense(100, 'Go to a bar');

account2.expense(30, 'Go to the movies');

console.log(account2.showDetails());