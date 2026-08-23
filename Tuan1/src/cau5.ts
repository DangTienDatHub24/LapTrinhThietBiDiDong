class BankAccount{
    balance: number;

    constructor(balance: number){
        this.balance = balance
    }

    deposit(amount: number): void{
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
        console.log(`Balance: ${this.balance}`);
    }

    withdraw(amount: number): void{
        if (amount > this.balance){
            console.log("Không đủ số dư để rút tiền");
        }else{
            this.balance -= amount; 
            console.log(`Withdrawn: ${amount}`);
            console.log(`Balance: ${this.balance}`);
        }
    }
}

const account = new BankAccount(1000)
account.deposit(300);
account.withdraw(500);
account.withdraw(1200);