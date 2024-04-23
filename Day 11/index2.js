let models = []
let years = []
let values = []
let counter = 0
let continuee = true
//////////////////////////

while (continuee) {
let model = prompt("type car # " + (counter + 1) + " model")
models[counter] = model
let year = prompt("type the year of car " + (counter + 1))
years[counter] = year
let value = parseFloat(prompt("type the value of car " + (counter + 1)))
values[counter] = value
counter++

let choice = prompt("Wish to continue adding information? (y/n)")
if (choice == "n")
    continuee = false
}

console.log("Register car:")
for (let i = 0; i < models.length; i++) {
console.log(models[i] + " - " + years[i] + " - " + values[i])
}

for (let i = 0; i < values.length - 1; i++) {
for (let j = 0; j < values.length - i -1; j++) {
if (values[j] > values[j+1]) {

    let highestModelValue = models[j]
    models[j] = models[j+1]
    models[j+1] = highestModelValue

    let highestYear = years[j]
    years[j] = years[j+1]
    years[j+1] = highestYear


    let highestValue = values[j]
    values[j] = values[j+1]
    values[j+1] = highestValue
        }
    }
}

console.log("Cars order due to price:")
for (let i = 0; i < models.length; i++) {
console.log(models[i] + " - " + years[i] + " - " + values[i])

}