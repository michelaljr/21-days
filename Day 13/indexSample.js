class Student{
    name
    age
    workArea
    constructor(name, age){
        this.name = name
        this.age = age
    }

    present(){
        console.log("hello, my name is " + this.name + " my age is " + this.age + ", i work with " + this.workArea)
    }
}

console.log("========= Register the students ==========")
    let students = [];
    let continuee = true;
    let studentIndex = 0;

while(continuee){
    let name = prompt("enter student name")
    let age = parseInt(prompt("enter age of student"))
    let student = new Student(name, age)

    let workArea = prompt("Enter work area of student");
    student.workArea = workArea;

    students[studentIndex] = student;
    let wishToContinue = prompt("enter 1 if you wish to register a new student")
    if(wishToContinue != "1")
    {
    continuee = false
    }else{
        studentIndex++ 
    }
}

