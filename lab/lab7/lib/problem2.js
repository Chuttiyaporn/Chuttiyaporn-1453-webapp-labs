class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner ;
        this.balance = balance ;
    }

    deposit(amount) {
        this.balance += amount ;
        return this.balance ;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return null ;
        }

        this.balance -= amount ;
        return this.balance ;
    }

    summary() {
        return `${this.owner}: ${this.balance} THB`;
    }

    static bankName() {
        return "KKU Bank" ;
    }
}

class SavingsAccount extends BankAccount {
    constructor(owner, balance = 0, rate = 0.02) {
        super(owner, balance) ;
        this.rate = rate ;
    }

    addInterest() {
        this.balance += this.balance * this.rate ;
        return this.balance ;
    }

    summary() {
        return `${super.summary()} savings @ ${this.rate}`;
    }
}


let savingAct = new SavingsAccount("Ann", 1000, 0.03) ;

console.log(savingAct.deposit(500)) ;
console.log(savingAct.withdraw(2000)) ;
console.log(savingAct.addInterest()) ;
console.log(savingAct.summary()) ;
console.log(`${BankAccount.bankName()} ${SavingsAccount.bankName()}`) ;