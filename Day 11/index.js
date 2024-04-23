let students = []
let grades = []
let counter = 0
let continuee = true;
///////////////

while (continuee) {

let name = prompt("type students name " + (counter + 1) + " student")
let grade = parseInt(prompt("type students grade "))
students[counter] = name
grades[counter] = grade
counter++
let continueOption = prompt("Do you wish to enter more information? y/n")
if (continueOption == "n")
    continuee = false

}

console.log("Students grade: ")
for (let i = 0 ; i < students.length; i++){
console.log(students[i] + " - " + grades[i])
}

let gradeSum = 0
for (let i = 0; i < grades.length; i++){
gradeSum += grades[i]
}

let median = gradeSum / students.length
console.log (" the sum of the class was: " + gradeSum)
console.log("the class median was: " + median)















