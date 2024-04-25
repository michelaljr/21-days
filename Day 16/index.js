// Arrays to organize names and passwords


let names = [];
let passwords = [];



// Functions to choose a users option
function pickOption() {
let option = prompt("What would you like to do? \n1. register \n2. login \n3. delete an account \n4. end program");
return option;
}

// Function to register name and password of user
function registerUser() {
    names.push(prompt("whats your name:"))
    passwords.push(prompt("whats the password?"))
    }    
    
// Function to login
function doLogin(name, password) {
let index = names.indexOf(name);
if (index !== -1 && passwords[index] == password) {
    return true;
} else {
    return false;
    }
}

// Function to delete an account
function deleteAccount(name) {
    let index = names.indexOf(name);
    if (index !== -1) {
        names.splice(index, 1);
        passwords.splice(index, 1);
        console.log("Register deleted with success!");
    } else {
        console.log("User not found.");
    }
}

// Flow of program function

let continuee = true;
while (continuee) {
let option = pickOption();

switch (option) {
    case "1":
        registerUser();
        break;
case "2":
    let name = prompt("whats the name?");
    let password = prompt("whats the password?");
    let login = doLogin(name, password);
    if (login) {
        console.log("Login complete.");
    } else {
        console.log("Name or password incorect!");
    }
    break;
case "3":
   let name = prompt("Type your name.")
    deleteAccount(name);
    break;
case "4":
    continuee = false;
    break;
default:
    console.log("Option invalid. Try again.");
    break;
    }
}
