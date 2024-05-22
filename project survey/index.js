
valuesArray = []
     
function AnswersValues() {}

    // ask question with 5 possible answers

    let value = Number();
     
     let a = 0   
     let b = 1 
     let c = 2  
     let d = 3   
     let e = 4
    
let question1 = prompt("How old are you? \na Under 18 \nb 18-25 \nc 26-33 \nd 34-41 \ne 42-49");

switch (question1) {
    case "a": 

        value = a
        break;

    case "b": 
    
        value = b
        break;

    case "c": 
    
        value = c
        break;

    case "d": 
    
        value = d
        break;

    case "e": 
    
        value = e
        break;
        
    default:
    console.log("invalid answer")
        break;
}
    console.log(value);
    valuesArray.push(value);


let question2 = prompt("question 2? \n1 a \n2 b \n3 c \n4 d \n5 e");

switch (question2) {
    case "a": 

        value = a
        break;

    case "b": 
    
        value = b
        break;

    case "c": 
    
        value = c
        break;

    case "d": 
    
        value = d
        break;

    case "e": 
    
        value = e
        break;
        
    default:
    console.log("invalid answer")
        break;
}

    console.log(value);
    valuesArray.push(value);

let question3 = prompt("question 3? \n1 a \n2 b \n3 c \n4 d \n5 e");

switch (question3) {
        case "a": 
    
            value = a
            break;
    
        case "b": 
        
            value = b
            break;
    
        case "c": 
        
            value = c
            break;
    
        case "d": 
        
            value = d
            break;
    
        case "e": 
        
            value = e
            break;
            
        default:
        console.log("invalid answer")
            break;
    }
    
        console.log(value);
        valuesArray.push(value);
    
let question4 = prompt("question 4? \n1 a \n2 b \n3 c \n4 d \n5 e");

switch (question4) {
    case "a": 

        value = a
        break;

    case "b": 
    
        value = b
        break;

    case "c": 
    
        value = c
        break;

    case "d": 
    
        value = d
        break;

    case "e": 
    
        value = e
        break;
        
    default:
    console.log("invalid answer")
        break;
}

    console.log(value);
    valuesArray.push(value);

let question5 = prompt("question 5? \n1 a \n2 b \n3 c \n4 d \n5 e");

switch (question5) {
    case "a": 

        value = a
        break;

    case "b": 
    
        value = b
        break;

    case "c": 
    
        value = c
        break;

    case "d": 
    
        value = d
        break;

    case "e": 
    
        value = e
        break;
        
    default:
    console.log("invalid answer")
        break;
}
  
    console.log(value);
    valuesArray.push(value);


    let sum = 0;
for (let i = 0; i < valuesArray.length; i++) {
    sum += valuesArray[i];
}


if (sum >= 0 && sum <= 4)
    console.log("go to platform")
if (sum >= 5 && sum <= 8)
    console.log("agendar sessao")
if (sum >= 9 && sum <= 12)
    console.log("mentoria inicial")
if (sum >= 13 && sum <= 16)
console.log("mentoria avanacada")
if (sum >= 17 && sum <= 20)
    console.log("mentoria premium")