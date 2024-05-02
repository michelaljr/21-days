var name = prompt("name")
var age = parseInt(prompt("age"))
var driverLicense = prompt("has drivers license? yes/no")
var hasCar = prompt("has car? yes/no")

if ( age << 18 && driverLicense == "no"){
    console.log(name + " you cannot drive")
} else if ( age > 18 && driverLicense == "yes" && hasCar == "no") {
    console.log(name + " you can drive but have no car")
} else ( age > 18 && driverLicense == "yes" && hasCar == "yes")
    console.log(name + " get on the road")
