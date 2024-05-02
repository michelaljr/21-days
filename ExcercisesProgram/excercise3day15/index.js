let name = prompt("name")
let age = parseInt(prompt("age"))
let continuee = true;

let driversLicense = true;
let hasCar = true;


let optionOne = prompt("do you have a drivers license? y/n") 
if (optionOne = "n"){
    driversLicense = false;
}

let optionTwo = prompt("do you own a car? y/n")
if (optionTwo = "n"){
    hasCar = false;
}

if (age < 18 || !driversLicense ){
    console.log(name + ", you cannot drive")
} else if (age >= 18 && driversLicense && !hasCar){
    console.log(name + ", you can drive but you have no car.")
} else (console.log("get on the road."))

