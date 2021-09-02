
class Bank_Account{
    constructor(balance = 500, freeze = 0) {
        this.history = [`initial balance: ${balance}`];
        this.balance = balance;
        this.freeze_balance = freeze;
    }
    deposit(amount){
        this.balance += amount;
        this.history.push(`deposit: ${amount}, [actual: ${this.balance}, freeze: ${this.freeze_balance}]`);
    }
    withdraw(amount){
        if(this.balance < amount){
            throw new Error('not enough balance');
        }
        this.balance-=amount;
        this.history.push(`withdraw: ${amount}, [actual: ${this.balance}, freeze: ${this.freeze_balance}]`);
    }
    getBalance(){
        return this.balance;
    }
    
    freeze(amount){
        if(this.balance < amount){
            throw new Error('not enough of balance to freeze');
        }
        this.balance-=amount;
        this.freeze_balance += amount;
        this.history.push(`freeze: ${amount}, [actual: ${this.balance}, freeze: ${this.freeze_balance}]`);
    }
    unfreeze(amount){
        if(this.freeze_balance < (amount)){
            throw new Error('not enough of freeze');
        }
        this.balance += amount;
        this.freeze_balance -= amount;
        this.history.push(`unfreeze: ${amount}, [actual: ${this.balance}, freeze: ${this.freeze_balance}]`);
    }

    // Это на тот случай если мы захотим за один клик разморозить асю сумму!

    // unfreeze(){
    //     this.balance += this.freeze;
    //     this.freeze = 0;
    // this.history.push(`unfreeze:[actual: ${this.balance}, freeze: ${this.freeze}]`)
    // }

    getFrozenBalance(){
        return this.freeze_balance;
    }

    getHistory(){
        let result = this.history.slice(0);
        result.push(`current balance: [actual: ${this.balance}, freeze: ${this.freeze_balance}]`);
        return result;
    }
}

let bank_account = new Bank_Account();

bank_account.deposit(300);

try {
    bank_account.withdraw(1500);
} catch(Error) {
    alert("Недостаточно средств на балансе для снятия вказанной суммы!")
}

try {
    bank_account.freeze(2000);
} catch(Error) {
    alert("Недостаточно средств на балансе для замораживания вказанной суммы!")
}

try {
    bank_account.unfreeze(1000);
} catch(Error) {
    alert("Недостаточно средств на балансе замороженного счёта для размораживания вказанной суммы!")
}

console.log(bank_account.getHistory());
