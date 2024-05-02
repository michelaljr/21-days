let name = prompt("name")
let age = parseInt(prompt("age"))
let height = parseFloat(prompt("height in meters"))
let weight = parseFloat(prompt("weight in kg"))
let actualYear = 2024
let yearBirth = 2024 - age
let imc = weight / (height * height)

console.log("hi, " + name + " you are " + age + " years old, born in " + yearBirth + ", and you are " + height + " meters tall and weigh " + weight + " kg, your IMC is " + imc + " kg/m squared")
