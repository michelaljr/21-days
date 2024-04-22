let number = parseInt(prompt("Type a positive number"))
let array = []
array[0] = number - 1
array[1] = number

for (let i = 2; i < 10; i++) {

array[i] = array[i - 1] + array[i - 2]

}

console.log("Array: " + array )