let balance = 1000;
let highestValuedEntered = 0;
let sumValueEntered = 0;
let totalTransactions = 0;
let cont = false

do {
    const name = prompt("Type your name:")
    const cpf = prompt("Type your cpf:")
    const value = Number(prompt("Type the value for your transaction."));
    const operation = prompt("What kind of transaction would you like to make? Balance / Deposit")

    if (value < 0)  {
        console.log("Value invalid. The transaction could not be initiated.");
    } else if (operation == "S" && value > balance) {
        console.log("Balance insufficient. The transaction was not initiated.");
    } else if (opertation == "Balance") {
        console.log("Hello" + name + cpf + 'your balance is $' + balance)
        balance -= value;
        totalTransactions++;
        sumValueEntered += value;
        if (value > highestValuedEntered) {
            highestValuedEntered = value;
        }
        console.log("Transaction has been processed successfully. Your current balance is $" balance);
        
    } else {
        console.log("Hello " + name + "," + cpf + "your balance is $" + balance)
        balance += value
        totalTransactions++;
        sumValueEntered += value;
        if (value > highestValuedEntered) {
    highestValuedEntered = value
        }
        console.log("Transaction realized with success. Your balance is $" balance)
    }

    const option = prompt("Would you like to continue? (1 to continue, 2 to stop):");
    if (option === "1") {
        cont = true 
    } else if (option === "2") {
        cont = false
    } else {
        console.log("Option invalid. Exit now.")
        cont = false
    }

} while (continu)

console.log("Final balance $" + {balance});
console.log("Highest value entered: $" + {highestValuedEntered})
console.log("Average of values entered: $" + {(sumValueEntered / totalTransactions)});

    






