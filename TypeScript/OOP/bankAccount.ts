class BankAccount {
    private static nextId: number = 1;
    public id: number;
    private balance: number;
    private static interestRate: number = 0.02;
    constructor(balance: number) {
        this.id = BankAccount.nextId++;
        this.balance = balance;
    }
    // default is public
    public deposit(amount: number): void {
        this.balance += amount;
    }
    public static setInterestRate(newInterestRate: number): void {
        BankAccount.interestRate = newInterestRate;
    }
    public getInterest(years: number): number {
        return BankAccount.interestRate * years * this.balance;
    }
}
const clients: BankAccount[] = [];

function create(): void {
    const newClient = new BankAccount(0);
    clients.push(newClient);
    console.log(`Account ID${newClient.id} created`)
}

function findCliendById(id: number): BankAccount | undefined {
    return clients.find((x) => x.id == id);
}

function deposit(id: number, amount: number): void {
    const client = findCliendById(id);
    if (client) {
        client.deposit(amount);
        console.log(`Deposited ${amount} to ID${id}`);
    }
    else {
        console.log("Account does not exist")
    }
}

function getInterest(id: number, years: number): string {
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