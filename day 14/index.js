//Function asking worker for their name and salary
let name = ""
let salary = 0;

function askWorker() {
    let name = prompt("enter your name");
    let salary = parseFloat(prompt("enter your salary"));
 calculateSalaryIncrease(name, salary);
}

//Function to calculate the increase of salary

function calculateSalaryIncrease(name , salary) {
    var increase = 0;

    if (salary <= 1500) {
        increase = 0.2; // 20%
    } else if (salary <= 2000) {
        increase = .15; // 15%
    } else if (salary <= 3000) {
        increase = 0.1; // 10%
    } else {
        increase = 0.05; // 5%
    }

    var newSalary = salary + (salary * increase);


// Exhibit results
console.log("Name of worker: " + name);
console.log("Salary; R$" + salary);
console.log("Increase: " + (increase * 100) + "%");
console.log("Salary reajusted: R$" + newSalary);

    askAgain(); // Ask if wishes to continue
}

// Function to ask if the user wishes to calculate again
function askAgain() {
var response = prompt(" Wish to calculate again? (y/n)");

if (response == "y") {
    askWorker(); // Restart process
} else {
    console.log("Program ended.");
    }
}

