//Declaration of Variables
let name = ""
let age = 0
let height = 0
let weight = 0

//Solititating information of user and attributing thr values to variables
name = prompt("Type your name: ")
age = parseInt(prompt("Type your age: "))
height = parseFloat(prompt("Type your height: "))
weight = parseInt(prompt("Type your weight: "))



//Calculating the year the person was born
let yearBorn = 0
yearBorn = 2023 - age


let imc = 0
imc = weight / (height * height)

//Exhibit the informations on the console
console.log("Hello " + name + ", you are " + age + " you were born in " + yearBorn + " you have " + height + " meters in height, weigh " + weight + " in kgs" + " and your IMC is " + imc + " kg/m^2") 





