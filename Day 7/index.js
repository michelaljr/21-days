
//       #1
// Creating Variables
let number = parseInt(prompt("Enter a whole number and positve"))

// Creating Loop FOR
for(let i = 0; i <= number; i++) {
    console.log(i)
}


//       #2
// Creating Loop FOR

for(let i = 0; i <= 50; i += 5)  {
    console.log(i)
}


//        #3
// Creating Loop FOR
for(let i = 50; i >= 0; i-= 5) {
    console.log(i)
}
//        #4
// Creating Variables
let number = parseInt(prompt("Type a whole number and that is positive."))
    for (let i = number; i <= number + 2; i++ ) {
        console.log("The numbers table: " + i)
        for (let j = 0; j <= 10; j++) {
            console.log(i + " X " + j + " = " + (i * j))
        }
    }