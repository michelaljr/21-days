let names = []
let passwords = []
let counter = 0

let continuee = true

while (continuee) {

    let options = prompt("Would you like to... 1 - register / 2 - login / 3 - delete account / 4 - end session")

switch (options) {

case "1":
    names[counter] = prompt("whats the name?")
    passwords[counter] = prompt("whats the password?")
    counter++

    break;

case "2":
    let name = prompt("whats the name?")
    let password = prompt("whats the password?")
    let validLogin = false

    for (let i = 0; i < names.length; i++) {
        if (name == names[i] && passwords == passwords[i]) {
                validLogin = true
        }
    }

    if (validLogin) {
        alert("Login successful.")
    } else {
        alert("login or password incorrect")
    }

    break;

    case "3":
        let nameDelete = prompt("which name you wish to delete")
        let auxNames = []
        let auxPasswords = []
        let auxCounter = 0

    for (let i = 0; i < counter; i++) {
        if (nameDelete == names[i]) {
            alert("deletion successful")
        } else {
            auxNames[auxCounter] = names[i]
            auxPasswords[auxCounter] = passwords[i]
            auxCounter++
            }
        }

        names = auxNames
        passwords = auxPasswords
        counter--

        break;

    case "4":
        continuee = false
        break;

    default: 
    console.log("Invalid option, choose other")
        break;

    }
}