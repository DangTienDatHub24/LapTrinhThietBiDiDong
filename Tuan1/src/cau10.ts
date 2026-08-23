class Account{
    public owner: string;
    private balance: number;
    readonly accountNumber: string;

    constructor(owner: string, balance: number, accountNumber: string){
        this.owner = owner;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    showInfo(): void {
        console.log(`Owner: ${this.owner}`);
        console.log(`Balance: ${this.balance}`);
        console.log(`Account Number: ${this.accountNumber}`);
    }
}

const acc = new Account("Dang Tien Dat", 1000, "AAA000");

acc.showInfo();