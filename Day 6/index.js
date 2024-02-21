
let amount 

let option = prompt(" Welcome to mike's gas station. Would you like to fill up your car with gas, alcohol, or calibrate your tires?" + "\n1 - Fill with gas; \n2 - Fill with alcohol; \n3 - Calibrate tires;")


switch (option) {
     
    case "1":
         amount = parseInt(prompt("How much would you like to spend to fill up your tank with gas?"))
         liters = amount / 5
        console.log(liters + " of liters of gas were used to fill your tank.")
        break;

        case "2":
            amount = parseInt(prompt("How much would you like to spend to fill up your tank with alcohol?"))
            liters = amount / 3
           console.log(liters + " of liters of alcohol were used to fill your tank.")
           break;

           default:
            console.log("Your tires have been calibrated.")
            break;
}

