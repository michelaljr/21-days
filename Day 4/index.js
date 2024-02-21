let name 
let age 


name = prompt("Type your name")
age = parseInt(prompt("Type your age"))
const haveLicense = prompt("Do you have a drivers license? (yes/no)")
const haveCar = prompt("Do you have a car? (yes/no)")









if (age <= 17 || haveLicense == "no") {

    console.log(name + " you are not allowed to drive.");

} else if(age > 17  && haveLicense == "yes"  && haveCar == "no") {
   
    console.log(name + " , you are allowed to drive but don't have a car.");

} else {
    console.log(name + " you are allowed to drive.")
}



