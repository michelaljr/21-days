
class Aluno {
    name
    age
    grade
     constructor(name, age, grade){
     this.name = name
     this.age = age
     this.grade = grade
  }
}

function CadastrarAluno(name, age, grade) {
    let student = new Aluno(name, age, grade)
    name++
    studentsArray.push(student)
        let found = false;
        for (let i = 0; i < studentsArray.length; i++) {
        if (studentsArray[i].name === name) {
        found = true;
        break;
         }
        return student
    }
}

// Array
let studentsArray = [];

//funções projeto
studentsArray.push(new Aluno("Mike", 25, 99))
studentsArray.push(new Aluno("Canela", 23, 100))

name = prompt("type student's name")
    age = parseInt(prompt("type student's age"))
    grade = prompt("type student's grade")

    CadastrarAluno(name, age, grade);



function OrdenarPorNota(studentsArray) {

    let contador = studentsArray.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < contador - 1; i++) {
            if (studentsArray[i].grade > studentsArray[i+1].grade){
                let tempAluno = studentsArray[i];
                studentsArray[i] = studentsArray[i+1];
                studentsArray[i+1] = tempAluno;
                swapped = true;
            }
        }
    } while (swapped);
    

    //studentsArray.sort((a, b)  => a.grade - b.grade)
    return studentsArray
}

function OrdenarPorIdade(studentsArray) {
    studentsArray.sort((a, b)  => b.age - a.age)
        return studentsArray
}

function OrdenarPorNome(studentsArray) {
    studentsArray.sort((a, b) => { 
        if (!a.name || !b.name){
            return 0;
        }
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        return nameA.localeCompare(nameB);
    });
        return studentsArray;
}

function CalcularMedia(studentsArray){
    let gradeSum = 0
    studentsArray.forEach((student) => {
        gradeSum += Number(student.grade)
    })
    const median = gradeSum / studentsArray.length;
    return median;
    
    
}